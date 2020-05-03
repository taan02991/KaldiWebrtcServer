<template>
    <div id="siri-container"> </div>
</template>
<script>
/* eslint-disable no-unused-vars */
import SiriWave from 'siriwave';
export default {
    name : "siriWave",
    mounted() {
        let m = new SiriWave({
            container: document.getElementById('siri-container'),
            width: 640,
            height: 200,
            style : "ios9",
            autostart: true
        });
        m.start()
    }
}
</script>>