import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default () => {
  return new Vuex.Store({
    state: {},
    actions: {
      fetchItem ({ commit }) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve({id: 'id-1', name: 'foo'})
          }, 200)
        }).then(item => {
          commit('setItem', item)
        })
      },
      fetchItem2 ({ commit }) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve({id: 'id-1', name: 'foo - 2'})
          }, 200)
        }).then(item => {
          commit('setItem', item)
        })
      },
      fetchAboutItem ({ commit }) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve({id: 'id-1', name: 'bar'})
          }, 200)
        }).then(item => {
          commit('setAboutItem', item)
        })
      }
    },
    mutations: {
      setItem (state, item) {
        Vue.set(state, 'item', item)
      },
      setAboutItem (state, item) {
        Vue.set(state, 'aboutItem', item)
      }
    }
  })
}
