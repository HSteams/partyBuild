/**
 * Created by fjl on 2017/7/14.
 */
import axios from 'axios'
import config from './config'
import qs from 'qs'

// axios.defaults.timeout = 5000;                    //响应时间
axios.defaults.headers.token = localStorage.getItem('token')
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
  },
  getMemberList (param) {
    return axios.post(config.getForumList, qs.stringify(param))
  },
  getUserInfo (param) {
    return axios.get(config.getUserInfo, qs.stringify(param))
  },
  changeUserInfo (param) {
    return axios.post(config.changeUserInfo, qs.stringify(param))
  },
  changePwd (param) {
    return axios.post(config.changePwd, qs.stringify(param))
  },
  getForumDetail (param) {
    return axios.get(config.getForumDetail, qs.stringify(param))
  },
  addComment (param) {
    return axios.post(config.addComment, qs.stringify(param))
  },
  saveForum (param) {
    return axios.post(config.saveForum, qs.stringify(param))
  }
}
