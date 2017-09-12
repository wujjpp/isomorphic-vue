/**
 * Created by Wu Jian Ping on - 2017/09/11.
 */

import { Router } from 'express'

let router = new Router()

router.post('/getCounterData', (req, res) => {
  res.json({
    now: new Date(),
    count: 10
  })
})

export default router
