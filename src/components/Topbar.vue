<template>
  <div id="topbar">
    <div class="warp">
      <span class="logo">Resume</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Topbar'
  }

</script>

<style lang="css" scoped>

  
  #topbar>.warp {
    height: 54px;
    margin: 0 auto;
    min-width: 1024px;
    max-width: 1440px;
    padding: 0 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  #topbar>.warp .logo {
   font-size: 24px;
  }
</style>
