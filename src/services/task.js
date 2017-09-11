import createRequest from '../core/request'

const getTaskList = (req) => {
  return createRequest(req).post('/api/tasks/loadTasks')
}

export default {
  getTaskList
}
