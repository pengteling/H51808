import Vue from 'vue'
import App from './App'
import Notification from '@/notification'
// import router from './router'
Vue.use(Notification)
/* eslint no-new:off */
new Vue({
  el: '#app',
  // router,
  // render:h=>h('div','test')
  render: h => h(App)
})
