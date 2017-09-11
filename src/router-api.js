/**
 * Created by Wu Jian Ping on - 2017/09/06.
 */

export default (app) => {
  app.use('/api/task', require('./routers/apis/task'))
}
