export default {
  name: 'About',
  asyncData ({ store, route }) {
    return store.dispatch('fetchItem')
  },
  computed: {
    item () {
      return this.$store.state.item
    }
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    change() {
      this.$store.dispatch('fetchItem2')
    }
  }
}
