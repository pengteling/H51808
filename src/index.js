import Vue from 'vue'
import App from './App.vue'
new Vue({
  el:'#app',
  data:{
    msg:123
  },
  //render:h=>h('div','test')
  render: h=>h(App)
})