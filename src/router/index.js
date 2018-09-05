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
    components: {
      default: Home,
      header: { template: `<div>header</div>` },
      footer: { template: `<div>footer</div>` }
    }
  },
  {
    // name: 'About',
    path: '/about',
    component: About,
    props: true,
    children: [
      {
        path: '',
        name: 'About',
        component: { template: `<div>about us index</div>` }
      },
      {
        path: 'tel',
        name: 'Tel',
        component: { template: `<div>tel:021-12345677</div>` }
      },
      {
        path: 'addr/:id',
        name: 'Addr',
        props: true,
        component: { template: `<div>Addr:上海市XX路</div>`, props: ['id'] }
      }
    ]
  },
  {
    name: 'User',
    path: '/user',
    component: User,
    // props: true,
    // props: { userid: 456, name: 'zs' },
    props: (route) => ({ userid: route.params.userid, photoid: route.query.photoid, sokey: route.query.sokey }),
    children: [
      {
        name: 'UserWho',
        path: ':userid',
        props: true,
        component: { template: `<div>用户{{$route.params.userid}}</div>`, props: ['userid'] }

      }
    ]
  },
  // {
  //   name: 'User2',
  //   path: '/user/:userid/photo/:photoid',
  //   component: User
  // }
  {
    path: '/a',
    // redirect: '/b'
    alias: ['/b', '/c', '/d/e/f'],
    component: { template: '<div>aaaaa</div>' }
  }
]
export default new Router({
  mode: 'history',
  routes
})
