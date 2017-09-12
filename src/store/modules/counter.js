import counterService from '../../services/counter'
import { LOAD_TASK_SUCCESS } from '../mutation-types'

const state = () => {
  return {
    now: '',
    count: 0
  }
}

const actions = {
  getCounterData({ commit, state }, { req }) {
    return counterService
      .getCounterData(req)
      .then(data => {
        commit({
          type: LOAD_TASK_SUCCESS,
          data
        })
      })
      .catch(() => {})
  },

  inc({commit, state}) {
    commit({type: 'inc'})
  },

  dec({commit, state}) {
    commit({type: 'dec'})
  }
}

const mutations = {
  [LOAD_TASK_SUCCESS](state, { data }) {
    state.now = data.now
    state.count = data.count
  },
  inc(state) {
    state.count++
  },
  dec(state) {
    state.count--
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
