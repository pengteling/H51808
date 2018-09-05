import Home from '@/Home'
import About from '@/About'
import User from '@/User'
import Router from 'vue-router'
import Vue from 'vue'
Vue.use(Router)

/*
  route :
  routes :
  router :
*/
const routes = [
  {
    name: 'Home',
    path: '/',
    component: Home
  },
  {
    name: 'About',
    path: '/about',
    component: About
  },
  {
    name: 'User',
    path: '/user',
    component: User
  }
]
export default new Router({
  mode: 'history',
  routes
})
