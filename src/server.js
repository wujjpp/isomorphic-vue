/**
 * Created by Wu Jian Ping on - 2017/09/06.
 */

import express from 'express'
import compression from 'compression'
import path from 'path'
import helmet from 'helmet'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import Promise from 'bluebird'
import _ from 'lodash'
import { parse } from './core/query-string'
import Context from './core/context'
import config from '../tools/config'
import assets from './assets-loader'
import createApp from './create-app'
import { createRenderer } from 'vue-server-renderer'

const PORT = process.env.PORT || config.backendPort || 9000
const app = express()

// setup query parser
app.set('query parser', parse)

app.use(helmet())
app.use(compression())

app.use(express.static(path.join(__dirname, 'public')))

// setup body-parser
app.use(bodyParser.json({limit: '5000kb'}))
app.use(bodyParser.raw({limit: '5000kb'}))
app.use(bodyParser.urlencoded({extended: false, limit: '5000kb'}))
app.use(bodyParser.text({type: 'text/xml'}))

// setup cookie-parser
app.use(cookieParser())

app.use((req, res, next) => {
  let context = new Context()
  req.context = context
  next()
})

// attach apis
require('./router-api')(app)

const renderer = createRenderer({
  template: `<!DOCTYPE html>
  <html lang="en">
    <head>
      <title>{{{ tdk.title }}}</title>
      <meta name="description" content="{{{ tdk.description}}}">
      <meta name="keywords" content="{{{ tdk.keywords }}}">
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1, minimal-ui">
      {{{ assets.styles }}}
    </head>
    <body>
      <div id="app">
        <!--vue-ssr-outlet-->
      </div>
      {{{ assets.scripts }}}
    </body>
  </html>`
})

const preparePromises = (components, funcs) => {
  for (let i = 0; i < components.length; ++i) {
    let component = components[i]
    if (component.hooks && component.hooks.init) {
      funcs.push(component.hooks.init)
    }
    if (component.components) {
      preparePromises(_.values(component.components), funcs)
    }
  }
}

const render = (context, req) => {
  return new Promise((resolve, reject) => {
    const { app, router, store } = createApp()
    router.push(context.url)
    router.onReady(() => {
      const matchedComponents = router.getMatchedComponents()
      if (!matchedComponents.length) {
        return reject({ code: 404 }) //eslint-disable-line
      }

      let asyncFetches = []
      preparePromises(matchedComponents, asyncFetches)

      Promise
        .map(asyncFetches, fetch => fetch({
          store,
          route: router.currentRoute,
          req
        }))
        .then(() => {
          context.state = store.state
          context.tdk = store.state.tdk
          resolve(app)
        })
        .catch(reject)
    }, reject)
  })
}

app.get('*', (req, res, next) => {
  const context = { url: req.url }
  render(context, req)
    .then(app => {
      context.assets = assets
      renderer.renderToString(app, context, (err, html) => {
        if (err) {
          if (err.code === 404) {
            res.status(404).send('Page not found')
          } else {
            res.status(500).send(err)
          }
        } else {
          res.send(html)
        }
      })
    })
})

let logger = console
app.listen(PORT, function(err) {
  if (err) {
    throw err
  }
  logger.log(`Listening at http://localhost:${PORT}/`) // eslint-disable-line
})
