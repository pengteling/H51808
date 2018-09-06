import Vue from 'vue'
import App from './App.vue'
import router from './router'
/* eslint no-new:off */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  render: h => h('App')

})
