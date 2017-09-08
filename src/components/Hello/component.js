import axios from 'axios'

export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    loadData: function (event) {
      axios
        .get('/api/getFoo')
        .then((response) => {
          alert(JSON.stringify(response.data, null, 2))
        })
        .catch((error) => {
          alert(error)
        })
    }
  }
}
