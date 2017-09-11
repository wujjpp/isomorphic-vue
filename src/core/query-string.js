/**
 * Created by Wu Jian Ping on - 2017/06/04.
 */

import qs from 'qs'

const options = {
  allowPrototypes: true,
  encodeValuesOnly: true,
  sort: (a, b) => a.localeCompare(b), // parameter display sequence by A-Z
  allowDots: true,
  // ignoreQueryPrefix: true,
  // delimiter: ';',
  arrayFormat: 'brackets'
  // arrayFormat: 'repeat'
}

const parse = (val) => qs.parse(val, options)

const stringify = (query) => qs.stringify(query, options)

const query = () => {
  if (__BROWSER__) {
    return parse(window.location.search.replace('?', '')) || {}
  }
  return {}
}

export {
  options,
  parse,
  stringify,
  query
}

export default {
  options,
  parse,
  stringify,
  query
}
