/**
 * Created by Wu Jian Ping on - 2017/09/12.
 */

const state = () => {
  return {
    title: '',
    description: '',
    keywords: ''
  }
}

const actions = {
  setTdk({ state }, {title, description, keywords}) {
    state.title = title
    state.description = description
    state.keywords = keywords
  }
}

export default {
  namespaced: true,
  state,
  actions
}
