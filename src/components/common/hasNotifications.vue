<template>
    <transition name="fade">
        <div v-if="success || error" transition="" class="notification white--text" v-bind:class="{ green: success, 'accent-3': success || error, red: error  }">
            <div class="notification-element">
                <b> {{ title }} </b>
            </div>
            <hr>
            <div class="notification-element">
                {{ message }}
            </div>
        </div>
    </transition>
</template>
<script>
export default {
  name: 'Notifications',
  data() {
      return {
          success: false,
          error: false,
          title: "",
          message: "",
      }
  },
  methods: {
      showSuccess( data ) {
          this.title   = data.title   || "";
          this.message = data.message || "";
          this.success = true;
          setTimeout( () => {
              this.success = false;
          }, 2500 );

      },
      showFailure( data ) {
          this.title   = data.title   || "";
          this.message = data.message || "";
          this.error   = true;
          setTimeout( () => {
              this.error = false;
          }, 2500 );
      },
  },
}
</script>
<style scoped>
 .notification {
     position: absolute;
     left: 85%;
     top: 0;
     width: 15%;
     border-radius: 5%;
     margin-top: 5%;
     z-index: 1000000000001;
 }
 .success {
     background-color: green;
 }
 .notification-element {
     padding: 5%;
 }

.fade-enter-active {
  animation: fade-in 2s;
}
.fade-leave-active {
  animation: fade-out 2s;
}

@keyframes fade-in {
  0% {
	opacity: 0;
  }
  50% {
	opacity: 1;
  }
  100% {
	opacity: 1;
  }
}

@keyframes fade-out {
  0% {
	opacity: 1;
  }
  50% {
	opacity: 0;
  }
  100% {
	opacity: 0;
  }
}
.green > hr, .green {
    border: solid 1px #B9F6CA;
}

</style> 
