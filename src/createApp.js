import Vue from 'vue'
import App from './components/App'
import createRouter from './createRouter'
import createStore from './store/createStore'
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
