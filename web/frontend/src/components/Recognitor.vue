<template>
    <div class='container'>
        <v-btn
        id="start"
        absolute
        dark
        fab
        bottom
        right
        fixed
        color='red'
        style='margin-bottom: 3rem;'
        v-if="statusField!=='START'"
        @click="start()"
        >
            <v-icon>mdi-microphone</v-icon>
        </v-btn>
    </div>
</template>

<script>

export default {
  name: 'Recognitor',
  data: function() {
      return {
          pc: null,
          dc: null,
          dcInterval: null,
          statusField: 'PRESS START',
          transcriptionOutput: [],
          lastTrans: '',
          imcompleteTrans: '',
      }
  },
  computed : {
      countTranscribe() {
          return this.$store.state.transcribe.countTranscribe;
      }
  },
  methods: {
    negotiate: function() {
        console.log('negotiate');
        return this.pc.createOffer().then(offer => {
        return this.pc.setLocalDescription(offer);
        }).then(() => {
            return new Promise( resolve => {
                if (this.pc.iceGatheringState === 'complete') {
                    resolve();
                } else {
                    let checkState = () => {
                        if (this.pc.iceGatheringState === 'complete') {
                            this.pc.removeEventListener('icegatheringstatechange', checkState);
                            resolve();
                        }
                    }

                    this.pc.addEventListener('icegatheringstatechange', checkState);
                }
            });
        }).then(() => {
            var offer = this.pc.localDescription;
            console.log(offer.sdp);
            return fetch( process.env.VUE_APP_API + '/offer', {
                body: JSON.stringify({
                    sdp: offer.sdp,
                    type: offer.type,
                }),
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST'
            });
        }).then(response => {
            return response.json();
        }).then(answer => {
            console.log(answer.sdp);
            return this.pc.setRemoteDescription(answer);
        }).catch(e => {
            console.log(e);
            this.statusField = "PRESS START";
        });
    },
    start: function() {
        this.statusField = 'Connecting...';
        this.$store.dispatch('search/start')

        var config = {
            sdpSemantics: 'unified-plan'
        };

        this.pc = new RTCPeerConnection(config);
        var parameters = {};

        this.dc = this.pc.createDataChannel('chat', parameters);
        this.dc.onclose = () => {
            clearInterval(this.dcInterval);
            console.log('Closed data channel');
            this.statusField = "PRESS START";
        };
        this.dc.onopen = () => {
            console.log('Opened data channel');
        };
        this.dc.onmessage = evt => {

            this.statusField = 'Listening...';
            this.$store.dispatch('search/listen')
            var msg = evt.data;
            this.$store.dispatch('transcribe/count')
            console.log(msg);
            this.$store.dispatch('search/changeMessage', msg);
            //detect message in command shutdown immediately 

            // resetCount stop show overlay
            if(this.countTranscribe > 8) {
                this.$store.dispatch('transcribe/resetCount')
                this.stop()
            }
            if (msg.endsWith('\n')) {
                this.lastTrans = this.imcompleteTrans + msg.substring(0, msg.length - 1);
                this.transcriptionOutput.push(this.lastTrans);
                this.imcompleteTrans = '';

            } else if (msg.endsWith('\r')) {
                this.lastTrans = this.imcompleteTrans + msg.substring(0, msg.length - 1) + '...';
                this.imcompleteTrans = '';
            } else {
                this.imcompleteTrans += msg;
            }
        };

        this.pc.oniceconnectionstatechange = () => {
            if (this.pc.iceConnectionState == 'disconnected') {
                console.log('Disconnected');
                this.statusField = "PRESS START";
            }
        }

        var constraints = {
            audio: true,
            video: false
        };

        navigator.mediaDevices.getUserMedia(constraints).then(stream => {
            stream.getTracks().forEach(track => {
                this.pc.addTrack(track, stream);
            });
            return this.negotiate();
        }, err => {
            console.log('Could not acquire media: ' + err);
            this.statusField = "PRESS START";
        });
    },
    stop: function() {
        // close data channel
        this.$store.dispatch('search/close')
        if (this.dc) {
            this.dc.close();
        }

        // close transceivers
        if (this.pc.getTransceivers) {
            this.pc.getTransceivers().forEach((transceiver) => {
                if (transceiver.stop) {
                    transceiver.stop();
                }
            });
        }

        // close local audio / video
        this.pc.getSenders().forEach((sender) => {
            sender.track.stop();
        });

        // close peer connection
        setTimeout(() => {
            this.pc.close();
        }, 500);
    },
  }
  
}

</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
