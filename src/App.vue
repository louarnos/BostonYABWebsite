<template>
    <router-view id="app"/>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style>
  .v-content {
      height: 100%;
  }
  #app {
      height: 100%;
  }
  .layout.column {
      height: 100%;
  }
  html {
      height: 100%;
  }
  body {
      font-family: Monsterrat, sans-serif;
      height: 100%;
  }
  .theme--light.v-label {
      color: #FFA000;
  }
  .theme--light.v-label.v-label--active {
      color: #FFA000;
      font-weight: 600;
  }
  .v-input__slot {
      background-color: #FAFAFA;
      padding-left: 1%;
      height: 40px;
      border-radius: 5px;
  }
  .theme--light.v-text-field > .v-input__control > .v-input__slot::before {
      border: none;
  }
  .v-messages__message {
      color: #E53935;
      font-weight: 400;
  }
  .v-btn.theme--light {
      color: #FFA000;
  }
</style>
