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
  body {
      font-family: Monsterrat, sans-serif;
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
      margin: .5%;
      padding-left: 1%;
  }
  .v-messages__message {
      color: #E53935;
      font-weight: 400;
  }
  .v-btn.theme--light {
      color: #FFA000;
  }
</style>
