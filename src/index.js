import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
/* eslint no-new:off */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  render: h => h('App')

})
