import http from './http'
export default function (Vue) {
  Vue.prototype.$http = http
  Vue.prototype.$app = ''
}

