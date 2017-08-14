import axios from 'axios'
import Vue from 'vue'
// 超时时间
axios.defaults.timeout = 5000
// 获取联网状态
axios.isOnLine = window.navigator.onLine
// 监听网络变化（在线）
window.addEventListener('online', () => {
  axios.isOnLine = true
})
// 监听网络变化（离线）
window.addEventListener('offline', () => {
  axios.isOnLine = false
})

// http请求拦截器
axios.interceptors.request.use(config => {
  // Vue.prototype.$Indicator.open()// 显示加载等待
  return config
}, error => {
  Vue.prototype.$Indicator.close()// 隐藏加载等待
  // 出错提示
  Vue.prototype.$Toast({
    message: '加载超时',
    duration: Vue.prototype.$duration
  })
  return Promise.reject(error)
})
// http响应拦截器
axios.interceptors.response.use(data => {
  // 隐藏加载等待
  Vue.prototype.$Indicator.close()
  return data
}, error => {
  // 隐藏加载等待
  Vue.prototype.$Indicator.close()
  // 出错提示
  Vue.prototype.$Toast({
    message: axios.isOnLine ? '加载失败' : '网络出错，请稍后重试',
    duration: Vue.prototype.$duration
  })
  return Promise.reject(error)
})

export default axios
