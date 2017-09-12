/**
 * Created by Wu Jian Ping on - 2017/09/12.
 */

let hooks = {
  init({ store, route, req }) {
    return store.dispatch('tdk/setTdk', {
      title: 'this is about Page',
      description: 'this is about page\'s description',
      keywords: 'this is about page\'s keywords'
    })
  }
}

export default {
  hooks
}
