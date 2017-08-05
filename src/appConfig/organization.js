/**
 * Created by lala on 17/8/3.
 */

/*  掌上组织多选项的配置  */
var mcPic1 = require('../assets/img/homePage/section1/orgnization/icon1.png')
var mcPic2 = require('../assets/img/homePage/section1/orgnization/icon2.png')
var mcPic3 = require('../assets/img/homePage/section1/orgnization/icon3.png')
var mcPic4 = require('../assets/img/homePage/section1/orgnization/icon4.png')
var mcPic5 = require('../assets/img/homePage/section1/orgnization/icon5.png')

export default [
  {
    title: '政治学习',
    pic: mcPic1,
    path: {name: 'NewsList', params: {type: 8, title: '政治学习'}}
  },
  {
    title: '思想汇报',
    pic: mcPic2,
    path: {name: 'ThoughtReports', params: {title: '思想汇报'}}
  },
  {
    title: '心得总结',
    pic: mcPic3,
    path: {name: 'Summary', params: {title: '心得总结'}}
  },
  {
    title: '民主评议',
    pic: mcPic4,
    path: {name: 'Comment', params: {type: 3, title: '民主评议'}}
  },
  {
    title: '流动党员找组织',
    pic: mcPic5,
    path: {name: 'FoundOrganization', params: {type: 5, title: '流动党员找组织'}}
  }
]
