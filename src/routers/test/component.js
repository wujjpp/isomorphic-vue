/**
 * Created by Wu Jian Ping on - 2017/09/11.
 */

import { mapState, mapActions } from 'vuex'

export default {
  asyncData ({ store, route, req }) {
    return store.dispatch('getTaskList', { req })
  },

  computed: {
    ...mapState('task', {
      tasks: state => state.tasks
    })
  },

  methods: {
    ...mapActions('task', [
      'getTaskList'
    ])
  }
}
