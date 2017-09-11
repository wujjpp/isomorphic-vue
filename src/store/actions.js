/**
 * Created by Wu Jian Ping on - 2017/09/11.
 */

import { SET_ITEM, SET_ABOUT_ITEM } from './mutation-types'

export default {
  fetchItem ({ commit }, params) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({id: 'id-1', name: 'foo'})
      }, 0)
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
      }, 0)
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
      }, 0)
    }).then(item => {
      commit({
        type: SET_ABOUT_ITEM,
        data: item
      })
    })
  }
}
