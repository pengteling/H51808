// import Home from '@/Home'
// import About from '@/About'
import Main from '@/Main'
import Footer from '@/Footer'
import Cart from '@/Cart'
import Me from '@/Me'
import Category from '@/Category'
import Home from '@/Home'
import Phone from '@/Phone'
import Tv from '@/Tv'
import Mpointsmall from '@/Mpointsmall'
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
    path: '/',
    components: {
      default: Main,
      footer: Footer
    },
    children: [
      {
        path: '',
        // name: 'Home',
        component: Home,
        meta: {
          index: 1
        },
        children: [
          {
            path: '',
            component: Phone,
            meta: {
              index: 1
            }
          },
          {
            path: 'tv',
            component: Tv
          }
        ]
      },
      {
        path: 'category',
        name: 'Category',
        component: Category,
        meta: {
          index: 2
        }
      },
      {
        path: 'cart',
        name: 'Cart',
        component: Cart,
        meta: {
          index: 3
        }
      },
      {
        path: 'me',
        name: 'Me',
        component: Me,
        meta: {
          index: 4
        }
      }
    ]
  },
  {
    path: '/mpointsmall',
    component: Mpointsmall,
    name: 'Mpointsmall'
  }
]
export default new Router({
  mode: 'history',
  routes
})
