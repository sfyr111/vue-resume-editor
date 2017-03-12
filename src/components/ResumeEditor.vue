<template>
  <div id="resumeEditor">
    <nav>
      <ol>
        <li v-for="(item, index) in resume.config" :class="{active: item.field === selected}" @click="selected = item.field">
          <svg class="icon">
            <use :xlink:href="`#icon-${item.icon}`"></use>
          </svg>
          {{item.name}}
        </li>
      </ol>
    </nav>
    <ol class="panels">
      <li v-for="(item, index) in resume.config" v-show="item.field === selected">
        <div v-if="resume[item.field] instanceof Array">
          <div class="subitem" v-for="subitem in resume[item.field]">
            <div class="resumeField" v-for="(value, key) in subitem">
              <label>{{key}}</label>
              <input type="text" :value="value">
            </div>
            <hr>
          </div>
        </div>
        
        <div v-else class="resumeField" v-for="(value, key) in resume[item.field]">
          <label>{{key}}</label>
          <input type="text" v-model="resume[item.field][key]">
        </div>
      </li>
      <li>
        {{count}}
        <button @click='add'>test</button>
      </li>
    </ol>
  </div>
</template>
<script>
  export default {
    name: 'ResumeEditor',
    computed: {
      count() {
        return this.$store.state.count
      }
    },
    methods: {
      add() {
        this.$store.commit('increment')
      }
    },
    data () {
      return {
        selected: 'profile',
        resume: {
          config: [
            {field: 'profile', icon: 'id', name: '个人简介'},
            {field: 'history', icon: 'work', name: '工作经历'},
            {field: 'education', icon: 'book', name: '教育经历'},
            {field: 'projects', icon: 'heart', name: '项目经历'},
            {field: 'awards', icon: 'cup', name: '获奖经历'},
            {field: 'contacts', icon: 'phone', name: '联系方式'}
          ],
          profile: {
            name: '',
            city: '',
            title: ''
          },
          history: [
            {company: 'AL', content: '我的第二份工作是'},
            {company: 'TX', content: '我的第一份工作是'}
          ],
          education: [
           { school: 'AL', content: '文字' },
           { school: 'TX', content: '文字' }
          ],
          projects: [
           { name: 'project A', content: '文字' },
           { name: 'project B', content: '文字' }
          ],
          awards: [
           { name: 'awards A', content: '文字' },
           { name: 'awards B', content: '文字' }
          ],
          contacts: [
           { contact: 'phone', content: '13812345678' },
           { contact: 'qq', content: '12345678' }
          ]
        }
      }
    }
  }

</script>
<style lang="scss" scoped>
#resumeEditor {
  width: 35%;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: row;
  overflow: auto;
  >nav {
    width: 100px;
    font-size: 14px;
    background-color: #283541;
    color: #fff;
    >ol {
      >li {
        height: 42px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 12px 0;
        &.active {
         background-color: rgba(158,158,158,0.2);
        }
      }
    }
  }
  >.panels {
    flex-grow: 1;
    >li {
      padding: 24px;
      .subitem {
        margin-bottom: 15px;
        hr {
          border: none;
          border-top: 1px solid;
          border-color: #a94442;
          opacity: 0.3;
        }
      }
    }
  }
}
.resumeField {
  >label {
    display: block;
  }
  input[type=text] {
    margin: 6px 0;
    border: 1px solid #3c763d;;
    width: 100%;
    height: 34px;
    padding: 6px 12px;
    font-size: 14px;
    outline: none;
    border-radius: 4px;
  }
}
svg.icon {
  width: 24px;
  height: 24px;
  margin-right: 4px;
}
ol {
  list-style: none;
}

</style>
