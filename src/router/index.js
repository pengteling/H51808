
import Main from '@/Main'
import Header from '@/Header/Header'
import Player from '@/Player/Player'
import List from '@/List/List'
import Lrc from '@/Lrc/Lrc'
import Mplayer from '@/Mplayer/Mplayer'

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
      header: Header,
      player: Mplayer
    },
    children: [
      {
        path: '',
        name: 'Player',
        component: Player
      },
      {
        path: 'list',
        name: 'List',
        component: List
      },
      {
        path: 'lrc',
        name: 'Lrc',
        component: Lrc
      }

    ]
  }

]
export default new Router({
  mode: 'history',
  routes
})
