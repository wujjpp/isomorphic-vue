import assets from './assets.json'

let scripts = []
let styles = []

if (assets.common && assets.common.js) {
  scripts.push(`<script src="${assets.common.js}"></script>`)
}
if (assets.main && assets.main.js) {
  scripts.push(`<script src="${assets.main.js}"></script>`)
}
if (assets.common && assets.common.css) {
  styles.push(`<link rel="stylesheet" href="${assets.common.css}" />`)
}
if (assets.main && assets.main.css) {
  styles.push(`<link rel="stylesheet" href="${assets.main.css}" />`)
}

export default {
  scripts: scripts.join(''),
  styles: styles.join('')
}
