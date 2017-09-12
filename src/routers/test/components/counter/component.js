/**
 * Created by Wu Jian Ping on - 2017/09/11.
 */

import { mapState, mapActions } from 'vuex'

const hooks = {
  init({ store, route, req }) {
    return store.dispatch('counter/getCounterData', { req })
  }
}

export default {
  hooks,
  computed: {
    ...mapState('counter', {
      counter: state => state
    })
  },

  methods: {
    ...mapActions('counter', [
      'inc',
      'dec'
    ])
  }
}
