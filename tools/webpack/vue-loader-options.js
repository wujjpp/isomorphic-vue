/**
 * Created by Wu Jian Ping on - 2017/09/06.
 */

import styleLoaderConfig from './style-loader-config'

export default {
  loaders: {
    'scss': styleLoaderConfig.scss,
    'less': styleLoaderConfig.less,
    'css': styleLoaderConfig.css
  },
  extractCSS: true,
  transformToRequire: {
    'video': 'src',
    'source': 'src',
    'img': 'src',
    'image': 'xlink:href'
  }
}
