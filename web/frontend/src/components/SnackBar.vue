<template>
  <div class="text-center ma-2">
    <v-snackbar v-model="isOpen" :color="color">
      {{ message }}
    </v-snackbar>
  </div>
</template>

<script>
export default {
  name: 'Alert',
  components: {
  },
  methods: {
  },
  computed: {
    isOpen() {
        return this.$store.state.notification.isOpen;
    },
    message() {
        return this.$store.state.notification.message;
    },
    color() {
        return this.$store.state.notification.color;
    }
  }
  
}

</script>