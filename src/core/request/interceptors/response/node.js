/**
 * Created by Wu Jian Ping on 2017/2/9.
 */

export default [
  response => {
    return response.data
  },
  error => {
    let err = new Error(error.message || '未知错误')
    err.errcode = ''
    err.stack = error.stack || ''
    if (error.response && error.response.data) {
      err.errcode = error.response.data.status
      err.message = error.response.data.message
    }
    err.status = error.status || error.response.status || 500
    return Promise.reject(err)
  }
]
