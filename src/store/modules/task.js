/**
 * Created by Wu Jian Ping on - 2017/09/11.
 */

import taskService from '../../services/task'
import { LOAD_TASK_SUCCESS, LOAD_TASK_FAIL } from '../mutation-types'

const state = {
  tasks: []
}

const actions = {
  getTaskList({ commit, state }, { req }) {
    taskService
      .getTaskList(req)
      .then(data => {
        commit({
          type: LOAD_TASK_SUCCESS,
          data
        })
      })
      .catch(err => {
        commit({type: LOAD_TASK_FAIL, err})
      })
  }
}

const mutations = {
  [LOAD_TASK_SUCCESS](state, {data}) {
    state.tasks = data
  },
  [LOAD_TASK_FAIL](data, {err}) {
    console.log(err) // eslint-disable-line
  }
}

export default {
  state,
  actions,
  mutations
}
