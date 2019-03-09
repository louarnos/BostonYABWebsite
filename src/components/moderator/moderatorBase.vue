<template>
  <div class="indigo lighten-2 white--text text-xs-center login-container" >
      <img :src="require('@/assets/yabLogoRound.png')"/>
  </div>
</template>

<script>

export default {
  name: 'ModeratorBase',
  props: [],
  components: {},
  methods: {},
}
</script>
<style scoped>
  .login-container {
      border: 3px solid #971111;
      background-color: #DDD;
      width: 100%;
      height: 100%;
      padding: 0;
  }
  .section-header > h1 {
      font-size: 3em;
      font-weight: 300;
      font-family: Monsterrat, sans-serif;
  }
  .bottom-margin {
      margin-bottom: 3%;
  }
  img {
      border: 20px solid red;
      border-radius: 50%;
      max-height: 100vh;
  }
</style>
