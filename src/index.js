import Vue from 'vue'
import App from './App'
import router from './router'

/* eslint no-new:off */
router.beforeEach((to, from, next) => {
  // console.log(to)
  // console.log(from)
  console.log('beforeEach')
  next()
})
router.beforeResolve((to, from, next) => {
  console.log('beforeResolve')
  next()
})
router.afterEach((to, from) => {
  console.log('afterEach')
})
new Vue({
  el: '#app',
  router,
  // render:h=>h('div','test')
  render: h => h(App)
})
