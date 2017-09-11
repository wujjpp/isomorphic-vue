/**
 * Created by Wu Jian Ping on - 2017/09/06.
 */

import Vue from 'vue'
import Vuex from 'vuex'
import { SET_ITEM, SET_ABOUT_ITEM } from './mutation-types'

Vue.use(Vuex)

export default () => {
  return new Vuex.Store({
    state: {
      todos: [
        { id: 1, text: 'Task-1', done: true },
        { id: 2, text: 'Task-2', done: false }
      ]
    },

    actions: {
      fetchItem ({ commit }, params) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve({id: 'id-1', name: 'foo'})
          }, 200)
        }).then(item => {
          commit({
            type: SET_ITEM,
            data: item
          })
        })
      },

      fetchItem2 (context) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve({id: 'id-1', name: 'foo - 2'})
          }, 200)
        }).then(item => {
          context.commit({
            type: SET_ITEM,
            data: item
          })
        })
      },

      fetchAboutItem ({ commit }) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve({id: 'id-1', name: 'bar'})
          }, 200)
        }).then(item => {
          commit({
            type: SET_ABOUT_ITEM,
            data: item
          })
        })
      }
    },

    mutations: {
      [SET_ITEM] (state, payload) {
        Vue.set(state, 'item', payload.data)
      },
      [SET_ABOUT_ITEM] (state, payload) {
        Vue.set(state, 'aboutItem', payload.data)
      }
    },

    getters: {
      completedTasks: state => {
        return state.todos.filter(todo => todo.done)
      },
      completedTaskCount: (state, getters) => {
        return getters.completedTasks.length
      }
    }
  })
}
