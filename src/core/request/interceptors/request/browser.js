/**
 * Created by Wu Jian Ping on 2017/2/9.
 */

export default [
  config => {
    config.headers['X-Requested-With'] = 'XMLHttpRequest' // setup xhr flag
    config.withCredentials = true
    return config
  },
  error => {
    return Promise.reject(error)
  }
]
