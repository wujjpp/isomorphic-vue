/**
 * Created by Wu Jian Ping on - 2017/09/12.
 */

let hooks = {
  init({ store, route, req }) {
    return store.dispatch('tdk/setTdk', {
      title: 'this is hello Page',
      description: 'this is hello page\'s description',
      keywords: 'this is hello page\'s keywords'
    })
  }
}

export default {
  hooks
}
