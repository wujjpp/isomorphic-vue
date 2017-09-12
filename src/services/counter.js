import createRequest from '../core/request'

const getCounterData = (req) => {
  return createRequest(req).post('/api/counter/getCounterData')
}

export default {
  getCounterData
}
