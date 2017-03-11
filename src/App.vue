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

  import 'normalize.css/normalize.css'
  import './assets/reset.css'

  export default {
    name: 'app',
    components: {
      Topbar,
      ResumeEditor,
      ResumePreview
    }
  }

</script>

<style lang="css">
  #app {
    font-family: 14px 'Avenir', Helvetica, Arial, sans-serif;
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
  
  #app>header {}
  
  #app>main {
    display: flex;
    justify-content: space-between;
    padding: 0 16px;
    min-width: 1024px;
    max-width: 1440px;
    flex-grow: 1;
    align-self: center;
    width: 100%;
    margin: 16px 0;
  }
  
  #topbar {
    color: #333;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.25);
    background-color: #44B4A1;
  }
  
  #resumeEditor {
    width: 35%;
    background-color: #2B3541;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.25);
  }
  
  #resumePreview {
    width: 60%;
    background-color: #fff;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.25);
    flex-grow: 1;
    margin-left: 16px;
  }

</style>
