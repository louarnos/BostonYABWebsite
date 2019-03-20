<template>
  <div class="red white--text text-xs-center login-container" >
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
      font-size: 5vh;
      font-weight: 300;
      font-family: Monsterrat, sans-serif;
  }
  .bottom-margin {
      margin-bottom: 3%;
  }
  img {
      max-height: 100vh;
  }
</style>
