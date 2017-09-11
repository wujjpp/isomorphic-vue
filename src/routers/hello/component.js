export default {
  name: 'Hello',
  asyncData ({ store, route }) {
    return store.dispatch('fetchAboutItem')
  },
  computed: {
    item () {
      return this.$store.state.aboutItem
    }
  },
  data () {
    return {
      msg: 'Hello VUE'
    }
  }
}
