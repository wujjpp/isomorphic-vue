/**
 * Created by Wu Jian Ping on - 2017/09/06.
 */

import Vue from 'vue'
import App from './App.vue'
import createRouter from './create-router'
import createStore from './store/create-store'
import { sync } from 'vuex-router-sync'

export default () => {
  const router = createRouter()
  const store = createStore()
  sync(store, router)

  const app = new Vue({
    router,
    store,
    render: h => h(App)
  })
  return { app, router, store }
}
