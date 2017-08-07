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
axios.defaults.withCredentials = true
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
  imageUpload (param) {
    return axios.post(config.imageUpload, qs.stringify(param))
  },
  uploadPersonalSummary (param) {
    return axios.post(config.uploadPersonalSummary, param)
  },
  checkSummary (param) {
    return axios.post(config.checkSummary, param)
  },
  uploadSummary (param) {
    return axios.post(config.uploadSummary, param)
  },
  uploadThoughtReport (param) {
    return axios.post(config.uploadThoughtReport, param)
  },
  checkReportType (param) {
    return axios.post(config.checkReportType, param)
  },
//  民主评议
  nationCommentJudge  (param) {
    return axios.post(config.nationCommentJudge, qs.stringify(param))
  },
  brabchList  (param) {
    return axios.get(config.brabchList, qs.stringify(param))
  },
  commentExpect  (param) {
    return axios.get(config.commentExpect, qs.stringify(param))
  },
  partyUserList  (param) {
    return axios.get(config.partyUserList, qs.stringify(param))
  },
  judgeIsComment  (param) {
    return axios.get(config.judgeIsComment, qs.stringify(param))
  },
  getPersonalSummary  (param) {
    return axios.get(config.getPersonalSummary, qs.stringify(param))
  },
  uploadComment  (param) {
    return axios.get(config.uploadComment, param)
  }

}
