import createRequest from '../core/request'

const getTaskList = (page, req) => {
  return createRequest(req).post('/api/tasks/loadAll', { page: page })
}

export default {
  getTaskList
}
