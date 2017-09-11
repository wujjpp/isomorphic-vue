/**
 * Created by Wu Jian Ping on - 2017/09/06.
 */

import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'

Vue.use(Router)

export default () => {
  return new Router({
    mode: 'history',
    routes: routes
  })
}
