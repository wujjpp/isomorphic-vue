/**
 * Created by Wu Jian Ping on - 2017/09/06.
 */

import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import getters from './getters'

import { SET_ITEM, SET_ABOUT_ITEM } from './mutation-types'

import task from './modules/task'

Vue.use(Vuex)

export default () => {
  return new Vuex.Store({
    actions,
    getters,
    modules: {
      task
    },
    mutations: {
      [SET_ITEM] (state, payload) {
        Vue.set(state, 'item', payload.data)
      },
      [SET_ABOUT_ITEM] (state, payload) {
        Vue.set(state, 'aboutItem', payload.data)
      }
    }
  })
}
