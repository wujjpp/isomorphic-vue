const httpStatusCode = {
  // 4xx
  '400': '错误的请求',
  '401': '该功能要求登录后才能使用',
  '402': 'Payment Required',
  '403': '服务器拒绝请求',
  '404': '请求的资源不存在',
  '405': 'Method Not Allowed',
  '406': 'Not Acceptable',
  '407': 'Proxy Authentication Required',
  '408': 'Request Timeout',
  '409': 'Conflict',
  '410': 'Gone',
  '411': 'Length Required',
  '412': 'Precondition Failed',
  '413': 'Request Entity Too Large',
  '414': 'Request-URI Too Long',
  '415': 'Unsupported Media Type',
  '416': 'Requested Range Not Satisfiable',
  '417': 'Expectation Failed',
  '422': 'Unprocessable Entity',
  '423': 'Locked',
  '424': 'Failed Dependency',
  '425': 'Unordered Collection',
  '426': 'Upgrade Required',
  '449': 'Retry With',
  '451': 'Unavailable For Legal Reasons',

  // 5xx
  '500': '系统内部错误',
  '501': 'Not Implemented',
  '502': '服务不可用',
  '503': '服务不可用',
  '504': '网关超时',
  '505': 'HTTP Version Not Supported',
  '506': 'Variant Also Negotiates',
  '507': ' Insufficient Storage',
  '509': 'Bandwidth Limit Exceeded',
  '510': 'Not Extended',
  '600': 'Unparseable Response Headers'
}

const getError = (statusCode) => {
  if (httpStatusCode[`${statusCode}`]) {
    let error = new Error(httpStatusCode[`${statusCode}`])
    error.status = +statusCode
    return error
    // return {
    //   status: +statusCode,
    //   message: httpStatusCode[`${statusCode}`]
    // }
  }
  return null
}

export default {
  getError
}
