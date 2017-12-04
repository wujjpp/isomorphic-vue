/**
 * Created by Wu Jian Ping on - 2017/09/12.
 */

let hooks = {
  init({ store, route, req }) {
    return store.dispatch('tdk/setTdk', {
      title: 'This is about Page',
      description: 'This is about page\'s description',
      keywords: 'This is about page\'s keywords'
    })
  }
}

export default {
  hooks
}
