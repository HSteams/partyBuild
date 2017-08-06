/**
 * Created by fjl on 2017/7/14.
 */
import axios from 'axios'
import config from './config'
import qs from 'qs'

// axios.defaults.timeout = 5000;                    //响应时间
axios.defaults.headers.token = ''
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
// axios.defaults.withCredentials = true

// 监听全局token值得改变
Object.defineProperty(window, 'token', {
  get () {
    return window.token
  },
  set: function (value) {
    axios.defaults.headers.token = value
  }
})

export default {
  login (param) {
    return axios.post(config.login, qs.stringify(param))
  },
  getNewsContent (param) {
    return axios.post(config.getNewsContent, qs.stringify(param))
  },
  getNewsList (param) {
    return axios.post(config.getNewsList, qs.stringify(param))
  }
}
