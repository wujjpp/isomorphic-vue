/**
 * Created by Wu Jian Ping on - 2017/09/11.
 */

import { mapState, mapGetters, mapActions } from 'vuex'

import counter from './components/counter'

let hooks = {
  init({ store, route, req }) {
    return Promise.all([
      store.dispatch('tdk/setTdk', {
        title: 'this is test Page',
        description: 'this is test page\'s description',
        keywords: 'this is test page\'s keywords'
      }),

      store.dispatch('task/getTaskList', { page: route.query.page, req })
    ])
  }
}

export default {
  hooks,

  components: {
    counter
  },

  computed: {
    ...mapState('task', {
      tasks: state => state
    }),

    ...mapGetters('task', [
      'cnt'
    ])
  },

  beforeRouteUpdate (to, from, next) {
    this.getTaskList({ page: to.query.page })
    next()
  },

  methods: {
    ...mapActions('task', [
      'getTaskList'
    ]),
    changePage(page, event) {
      event && event.preventDefault()
      this.$router.history.push({
        name: 'test',
        query: {page}
      })
    }
  }
}
