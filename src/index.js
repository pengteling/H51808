import Vue from 'vue'
import App from './App.vue'
// import App from './App.jsx'
// import App from './App2.vue'
// import App from './Comp.jsx'
new Vue({
  el:'#app',  
  //render:h=>h('div','test')
  render: h=>h(App)
})