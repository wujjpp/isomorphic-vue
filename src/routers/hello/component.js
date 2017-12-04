/**
 * Created by Wu Jian Ping on - 2017/09/12.
 */

let hooks = {
  init({ store, route, req }) {
    return store.dispatch('tdk/setTdk', {
      title: 'This is hello Page',
      description: 'This is hello page\'s description',
      keywords: 'This is hello page\'s keywords'
    })
  }
}

export default {
  hooks
}
