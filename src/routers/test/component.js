/**
 * Created by Wu Jian Ping on - 2017/09/11.
 */

import { mapState, mapGetters, mapActions } from 'vuex'

export default {
  asyncData ({ store, route, req }) {
    return store.dispatch('task/getTaskList', { page: route.query.page, req })
  },

  computed: {
    ...mapState('task', {
      tasks: state => state.tasks
    }),

    ...mapGetters('task', [
      'totalCount'
    ])
  },

  methods: {
    ...mapActions('task', [
      'getTaskList'
    ])
  }
}
