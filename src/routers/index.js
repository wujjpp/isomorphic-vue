/**
 * Created by Wu Jian Ping on - 2017/09/11.
 */

import defaultLayout from '../layouts/default'

export default [
  {
    path: '/',
    component: defaultLayout,
    children: [
      {
        name: 'home',
        path: '',
        component: () => import('./home')
      },
      {
        name: 'about',
        path: 'about',
        component: () => import('./about')
      },
      {
        name: 'test',
        path: 'test',
        component: () => import('./test')
      }
    ]
  }
]
