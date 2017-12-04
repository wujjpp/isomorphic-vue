/**
 * Created by Wu Jian Ping on - 2017/12/04.
 */

let hooks = {
  init({ store, route, req }) {
    return store.dispatch('tdk/setTdk', {
      title: 'This is home Page',
      description: 'This is home page\'s description',
      keywords: 'This is home page\'s keywords'
    })
  }
}

export default {
  hooks
}
