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
          <div class="subitem" v-for="(subitem, i) in resume[item.field]">
            <div class="resumeField" v-for="(value, key) in subitem">
              <label>{{key}}</label>
              <input type="text" :value="value" @input="changeResumeField(`${item.field}.${i}.${key}`, $event.target.value)">
            </div>
            <hr>
          </div>
        </div>
        
        <div v-else class="resumeField" v-for="(value, key) in resume[item.field]">
          <label>{{key}}</label>
          <!-- <input type="text" v-model="resume[item.field][key]"> -->
          <input type="text" :value="value" @input="changeResumeField(`${item.field}.${key}`, $event.target.value)">
        </div>
      </li>
    </ol>
  </div>
</template>
<script>
  export default {
    name: 'ResumeEditor',
    computed: {
      selected: {
        get () {
          return this.$store.state.selected
        },
        set (value) {
          return this.$store.commit('switchTab', value)
        }
      },
      resume () {
        return this.$store.state.resume
      }
    },
    methods: {
      changeResumeField (path, value) {
        this.$store.commit('updateResume', {
          path,
          value
        })
      }
    },
    data () {
      return {
      }
    }
  }

</script>
<style lang="scss" scoped>
#resumeEditor {
  min-width: 35%;
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
