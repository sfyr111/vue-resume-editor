<template>
  <div id="topbar">
    <div class="warp">
      <span class="logo">Resume</span>
      <div class="actions">
        <button class="primary">保存</button>
        <button>预览</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Topbar'
  }

</script>

<style lang="scss" scoped>
  #topbar {
    color: #fff;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.25);
    background-color: #214451;
    >.warp {
      height: 64px;
      margin: 0 auto;
      min-width: 1024px;
      max-width: 1440px;
      padding: 0 16px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    >.warp .logo {
      font-size: 24px;
    }
  }
  button {
    width: 88px;
    height: 36px;
    border: none;
    cursor: pointer;
    font-size: 14px;
    background-color: #214451;
    color: #fff;
    border-radius: 2px;
    &:hover {
      background-color: rgba(158,158,158,0.2);
    }
    &.primary {
      
    }
  }
</style>
