import Vuex from 'vuex'
import Vue from 'vue'
import objectPath from 'object-path'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
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
        name: '杨然',
        city: '南京',
        title: 'H5前端工程师',
        birthday: '2000-01-01'
      },
      history: [
        {company: '慧通商旅', content: '前端开发'},
        {company: '蓝舰信息', content: '前端开发'}
      ],
      education: [
        { school: '毕业院校一', content: '专业' },
        { school: '毕业院校二', content: '专业' }
      ],
      projects: [
        { name: 'Vue简历编辑器', content: '技术栈：vue2.0、vue-router、vuex' },
        { name: 'jQuery音乐播放器', content: '' }
      ],
      awards: [
        { name: '再来一罐', content: '红牛再来一罐' },
        { name: '三好学生', content: '' }
      ],
      contacts: [
        { contact: 'phone', content: '13401637929' },
        { contact: 'qq', content: '176580085' },
        { contact: '邮箱', content: 'sfyr111@163.com' }
      ]
    }
  },
  mutations: {
    switchTab (state, payload) {
      state.selected = payload
    },
    updateResume (state, {path, value}) {
      console.log(path)
      objectPath.set(state.resume, path, value)
    }
  }
})

export default store
