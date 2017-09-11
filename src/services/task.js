import createRequest from '../core/request'

const getTaskList = (req) => {
  return createRequest(req).post('/api/tasks/loadAll')
}

export default {
  getTaskList
}
