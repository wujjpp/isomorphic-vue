/**
 * Created by Wu Jian Ping on - 2017/06/07.
 */
export default {
  appenders: {
    app: {
      type: 'logstashUDP2',
      host: '10.47.52.5',
      port: 5055,
      logType: 'application',
      fields: {
        appName: 'pc-web',
        env: 'sit'
      }
    }
  },
  categories: {
    default: {
      appenders: ['app'],
      level: 'info'
    }
  }
}
