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
        component: () => import('./routers/hello')
      },
      {
        path: '/about',
        name: 'about',
        component: () => import('./routers/about')
      },
      {
        path: '/test',
        name: 'test',
        component: () => import('./routers/test')
      }
    ]
  })
}
