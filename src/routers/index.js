/**
 * Created by Wu Jian Ping on - 2017/09/11.
 */

export default [
  {
    path: '/',
    name: '/',
    component: () => import('./hello')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('./about')
  },
  {
    path: '/test',
    name: 'test',
    component: () => import('./test')
  }
]
