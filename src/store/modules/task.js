/**
 * Created by Wu Jian Ping on - 2017/09/11.
 */

import taskService from '../../services/task'
import { LOAD_TASK_SUCCESS } from '../mutation-types'

const state = () => {
  return {
    total: 0,
    items: []
  }
}

const actions = {
  getTaskList({ commit, state }, { page, req }) {
    return taskService
      .getTaskList(page, req)
      .then(data => {
        commit({
          type: LOAD_TASK_SUCCESS,
          data
        })
      })
      .catch(() => {})
  }
}

const getters = {
  cnt: state => {
    return (state.items && state.items.length) || 0
  }
}

const mutations = {
  [LOAD_TASK_SUCCESS](state, { data }) {
    state.total = data.total
    state.items = data.items
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
