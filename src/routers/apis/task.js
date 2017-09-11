import { Router } from 'express'

let router = new Router()

let tasks = []

for (let i = 0; i < 1000; ++i) {
  tasks.push({
    id: i + 1,
    name: 'Task - ' + (i + 1)
  })
}

router.post('/loadAll', (req, res) => {
  let page = +(req.body.page || 1)
  let size = +(req.body.size || 10)

  let start = (page - 1) * size

  let results = {
    total: tasks.length,
    items: []
  }

  for (let i = start; (i < (start + size) && i < tasks.length); ++i) {
    results.items.push(tasks[i])
  }

  res.json(results)
})

export default router
