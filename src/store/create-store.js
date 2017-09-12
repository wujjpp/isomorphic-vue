/**
 * Created by Wu Jian Ping on - 2017/09/06.
 */

import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import getters from './getters'

import task from './modules/task'
import counter from './modules/counter'
import tdk from './modules/tdk'

Vue.use(Vuex)

export default () => {
  return new Vuex.Store({
    actions,
    getters,
    modules: {
      tdk,
      task,
      counter
    }
  })
}
