import Vue from 'vue'
// import App from './App.vue'
import App from './App.jsx'
new Vue({
  el:'#app',  
  //render:h=>h('div','test')
  render: h=>h(App)
})