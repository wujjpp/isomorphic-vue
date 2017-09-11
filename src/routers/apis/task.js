import { Router } from 'express'

let router = new Router()

let tasks = []

for (let i = 0; i < 10; ++i) {
  tasks.push({
    id: i + 1,
    name: 'Task - ' + i
  })
}

router.post('loadAll', (req, res) => {
  res.json(tasks)
})

export default router
