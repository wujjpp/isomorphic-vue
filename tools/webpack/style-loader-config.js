/**
 * Created by Wu Jian Ping on - 2017/09/06.
 */

import ExtractTextPlugin from 'extract-text-webpack-plugin'

export default {
  scss: ExtractTextPlugin.extract({
    use: [
      {
        loader: 'css-loader',
        options: {
          minimize: true
        }
      },
      {
        loader: 'postcss-loader',
        options: {
          config: {
            path: './tools/postcss.config.js'
          }
        }
      },
      {
        loader: 'sass-loader'
      }
    ],
    fallback: 'vue-style-loader'
  }),

  less: ExtractTextPlugin.extract({
    use: [
      {
        loader: 'css-loader',
        options: {
          minimize: true
        }
      },
      {
        loader: 'postcss-loader',
        options: {
          config: {
            path: './tools/postcss.config.js'
          }
        }
      },
      {
        loader: 'less-loader'
      }
    ],
    fallback: 'vue-style-loader'
  }),

  css: ExtractTextPlugin.extract({
    use: [
      {
        loader: 'css-loader',
        options: {
          minimize: true
        }
      },
      {
        loader: 'postcss-loader',
        options: {
          config: {
            path: './tools/postcss.config.js'
          }
        }
      }
    ],
    fallback: 'vue-style-loader'
  })
}
