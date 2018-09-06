import Vue from 'vue'
import App from './App'
import router from './router'

const auth = {
  logined: () => {
    return true
  }
}
/* eslint no-new:off */
router.beforeEach((to, from, next) => {
  console.log(to)
  // console.log(from)

  console.log('beforeEach')
  if (to.matched.some(route => route.meta.requiresAuth)) {
    // 判断是否登陆
    console.log('需要登陆')
    if (!auth.logined()) {
      console.log('没有登陆')
      next('/login')
    }
  }
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
