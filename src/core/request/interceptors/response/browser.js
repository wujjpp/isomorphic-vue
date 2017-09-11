/**
 * Created by Wu Jian Ping on 2017/2/9.
 */

export default [
  response => {
    return response.data
  },
  error => {
    let err = {
      status: 500,
      message: (error.response && error.response.data && error.response.data.message) || error.message || '未知错误',
      stack: error.stack || ''
    }
    return Promise.reject(err)
  }
]
