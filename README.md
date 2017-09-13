# Isomorphic Vue
Isomorphic Vue is an opinionated boilerplate for web
development built on top of [Node.js](https://nodejs.org/),
[Express](http://expressjs.com/) and
[Vue 2](https://vuejs.org/), containing modern web development
tools such as [Webpack 3](http://webpack.github.io/), [Babel 6](https://babeljs.io/)
and [Browsersync](http://www.browsersync.io/). Helping you to stay productive
following the best practices. A solid starting point for both professionals
and newcomers to the industry.

[![Build Status](https://travis-ci.org/wujjpp/isomorphic-vue.svg?branch=master)](https://travis-ci.org/wujjpp/isomorphic-vue)

## Features
- [Vue 2](https://vuejs.org/)
- [Webpack 3](https://webpack.js.org/)
- [Babel 6](https://babeljs.io/)
- Support client live reload
- Supports server auto compile and restart
- Support [less](http://lesscss.org/), [sass](https://sass-lang.com/)

## How to Install
```shell
$ git clone https://github.com/wujjpp/marko-starter-kit.git
$ cd marko-starter-kit
$ npm install
```

## How to Run and Build
#### Run
```shell
$ npm start
 ```

#### Build
```shell
$ npm run build
```

#### Run in dist
```shell
$ npm run start:dist
```

#### About CDN
Sometimes, we should host our static files(js,css,image and etc) in CDN, for this case you should change seetings in  `/cdn_config.js`,
for example: if our CDN root is `http://cache.mycdn.com/`, change `//cache.YourCDN.com` to `//cache.mycdn.com`

__/cdn_settings.js__
```javascript
export default {
  dev: {
    publicPath: '/'
  },

  sit: {
    publicPath: '//sitcache.mycdn.com/'
  },

  uat: {
    publicPath: '//uatcache.mycdn.com/'
  },

  prod: {
    publicPath: '//cache.mycdn.com/'
  }
}

```
then use the following command for building, after built, upload the `/build/public` folder to CDN,  thats all.
```shell
$ npm run build -- prod
```
NOTE: double dashes are required and there is a `blank` between `--` and `prod`

## Analyse webpack stats
We have integrated tools for analysing bundled file, after run `npm run build`, try to type the following command in your terminal.

```shell
$ npm run analyse:client
```

```shell
$ npm run analyse:server
```

```shell
$ npm run analyse
```

## About Browsersync
Navigate to [http://localhost:3001](http://localhost:3001) to open Browsersync control panel

## Directory Layout
```
.
├── /public/                     # Static files which are copied into the /build/public folder
├── /src/                        # The source code of the application
│   ├── /components/             # Top level vue components
│   ├── /core/                   # Core module or utility library
│   ├── /routes/                 # Routes or pages
│   │   ├── /apis/               # Backend apis
│   │   ├── /test/               # Example page
│   │   │   ├── /components      # Page level compoment
│   │   │   ├── /images          # Page level images
│   │   │   ├── component.js     # Vue component js
│   │   │   ├── index.vue        # Vue component template
│   │   │   └── style.scss       # Page level style
│   │   └── /xxxx/               # xxxx page    
│   ├── /service/                # isomorphic api service interface entry
│   ├── /store/                  # vuex store
│   ├── /styles/                 # Global stylesheets
│   ├── /assets-loader.js        # Loader for loading assets.json
│   ├── /client.js               # Client entry
│   ├── /create-app.js           # Create Vue App
│   ├── /create-router.js        # Create Vue Router
│   ├── /router-api.js           # Attach backended api modules
│   └── /server.js               # Express server app
├── /tests/                      # Unit and end-to-end tests
├── /tools/                      # Build automation scripts and utilities
│   ├── /analyse/                # analyse tools for webpack stats
│   ├── /libs/                   # Library for build system
│   ├── /loaders/                # Custom webpack loader
│   ├── /plugins/                # Custom webpack plugin
│   ├── /webpack/                # Webpack config files
│   ├── /build-client.js         # Scripts for build client app
│   ├── /build-server.js         # Scripts for build server app
│   ├── /build.js                # Scripts for build client and server
│   ├── /clean.js                # Cleans up for the output (build) folder
│   ├── /config.js               # Build config file
│   ├── /copy.js                 # Copy package.json, public folder and assets.json
│   ├── /post.config.js          # Configuration for transforming styles with PostCSS
│   ├── /run.js                  # Helper function for running build automation tasks
│   ├── /start.js                # Launches the development web server with "live reload"
│   └── /watch.js                # watch public folder, if changed copy files to dist/public folder
├── cdn-settings.js              # Config CDN for each ENV
├── entry-settings.js            # Configure client entry for built
├── package.json                 # The list of 3rd party libraries and utilities
└── port-settings.js             # Configure front and backend port for development
```

## How to Update
```shell
$ git checkout master
$ git pull origin master
$ npm install
```

Made with ♥ by Wu Jian Ping
