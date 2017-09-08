/**
 * Created by Wu Jian Ping on - 2017/09/06.
 */

import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default () => {
  return new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        name: '/',
        component: () => import('./components/Hello')
      },
      {
        path: '/about',
        name: 'about',
        component: () => import('./components/About')
      },
      {
        path: '/test',
        name: 'test',
        component: () => import('./components/Test')
      }
    ]
  })
}
