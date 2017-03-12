<template>
  <div id="app">
    <!-- 导航 -->
    <header>
      <Topbar></Topbar>
    </header>
    <main>
      <!-- 编辑器 -->
      <ResumeEditor></ResumeEditor>
      <!-- 预览区  -->
      <ResumePreview></ResumePreview>
    </main>
  </div>
</template>

<script>
  import Topbar from './components/Topbar'
  import ResumeEditor from './components/ResumeEditor'
  import ResumePreview from './components/ResumePreview'
  import icons from './assets/icons'
  import store from './store/index'
  import 'normalize.css/normalize.css'
  import './assets/reset.css'

  export default {
    name: 'app',
    store,
    components: {
      Topbar,
      ResumeEditor,
      ResumePreview
    },
    created () {
      document.body.insertAdjacentHTML('afterbegin', icons)
    }
  }

</script>

<style lang="scss" rel="stylesheet/scss">
  #app {
    font-family: 14px 'Avenir', Helvetica, Arial, sans-serif;
    display: flex;
    flex-direction: column;
    height: 100vh;
    >main {
      flex-grow: 1;
    }
    >main {
      display: flex;
      justify-content: space-between;
      padding: 0 16px;
      min-width: 1024px;
      max-width: 1440px;
      align-self: center;
      width: 100%;
      margin: 16px 0;
    }
  }
  svg.icon {
    height: 1em;
    width: 1em;
    fill: currentColor;
    vertical-align: -0.1em;
    font-size: 12px;
  }
  #app>header {}
  

  
  
  #resumePreview {
    width: 60%;
    background-color: #fff;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.25);
    flex-grow: 1;
    margin-left: 16px;
  }

</style>
