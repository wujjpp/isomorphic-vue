import counterService from '../../services/counter'

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
        commit('onLoadCompleted', data)
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
  onLoadCompleted(state, data) {
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
