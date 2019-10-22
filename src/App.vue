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
  html {
      height: 100%;
      margin: 0;
  }
  #app {
      position: relative !important;
  }
  body {
      font-family: Monsterrat, sans-serif;
      height: 100%;
      margin: 0;
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
      border-radius: 5px;
  }
  .theme--light.v-text-field > .v-input__control > .v-input__slot::before {
      border: none;
      border-color: #FFA000;
  }
  .v-messages__message {
      color: #E53935;
      font-weight: 400;
  }
  .v-btn.theme--light {
      color: #FFA000;
  }
  .ck-editor__main > .ck.ck-content.ck-editor__editable {
      min-height: 300px !important;
      color: black;
      text-align: left;
  }
  .multiselect, .multiselect__select, .multiselect__tags {
      //max-height: 32px !important;
      min-height: 32px !important;
  }
  .multiselect__tags {
      padding: 4px;
      padding-left: 2px;
      padding-bottom: 0px;
  }
  .multiselect__tag {
      margin-bottom: 0px;
  }
  .v-chip.v-chip.v-chip--outline {
      color: #FFA000;
  }
  .multiselect__placeholder {
      color: #FFA000;
      font-size: 16px;
  }
  .v-text-field > .v-input__control > .v-input__slot::after {
      border: none;
  }
</style>
