/**
 * Created by Wu Jian Ping on - 2017/09/11.
 */

import { mapState, mapGetters, mapActions } from 'vuex'

import appCounter from './components/app-counter'

let hooks = {
  init({ store, route, req }) {
    return Promise.all([
      store.dispatch('tdk/setTdk', {
        title: 'This is test Page',
        description: 'This is test page\'s description',
        keywords: 'This is test page\'s keywords'
      }),

      store.dispatch('task/getTaskList', { page: route.query.page, req })
    ])
  }
}

export default {
  hooks,

  components: {
    [appCounter.name]: appCounter
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
