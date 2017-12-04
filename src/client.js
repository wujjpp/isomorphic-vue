/**
 * Created by Wu Jian Ping on - 2017/09/06.
 */

import createApp from './create-app'
import _ from 'lodash'
import './styles/global.scss'

if (__BROWSER__) {
  require('bootstrap')
}

const { app, router, store } = createApp()

if (window.__INITIAL_STATE__) {
  store.replaceState(window.__INITIAL_STATE__)
}

const preparePromises = (components, funcs) => {
  for (let i = 0; i < components.length; ++i) {
    let component = components[i]
    if (component.hooks && component.hooks.init) {
      funcs.push(component.hooks.init)
    }
    if (component.hooks && component.hooks.defer) {
      funcs.push(component.hooks.defer)
    }
    if (component.components) {
      preparePromises(_.values(component.components), funcs)
    }
  }
}

router.onReady(() => {
  let $t = $('title')
  let $d = $('meta[name="description"]')
  let $k = $('meta[name="keywords"]')
  router.beforeResolve((to, from, next) => {
    const matched = router.getMatchedComponents(to)
    const prevMatched = router.getMatchedComponents(from)
    let diffed = false
    const activated = matched.filter((c, i) => {
      return diffed || (diffed = (prevMatched[i] !== c))
    })
    if (!activated.length) {
      return next()
    }

    let asyncFetches = []
    preparePromises(matched, asyncFetches)

    Promise
      .all(_.map(asyncFetches,
        fetch => fetch({
          store,
          route: router.currentRoute
        })
      ))
      .then(() => {
        $t.text(store.state.tdk.title)
        $d.attr('content', store.state.tdk.description)
        $k.attr('content', store.state.tdk.keywords)
        next()
      })
      .catch(next)
  })
  app.$mount('#app')
})
