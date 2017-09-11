import { mapState, mapGetters, mapActions } from 'vuex'

export default {
  asyncData ({ store, route }) {
    return store.dispatch('fetchItem', {a: 123, b: 456})
  },

  computed: {
    localComputed() {
      return 'this is local computed property'
    },

    ...mapGetters({
      completedTaskCount: 'completedTaskCount',
      doneCount: 'completedTaskCount'
    }),

    ...mapState({
      item: state => state.item
    })
  },

  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },

  methods: {
    ...mapActions({
      change: 'fetchItem2'
    })
  }
}
