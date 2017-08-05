/**
 * Created by fjl on 2017/7/11.
 */
/*  首页多选项的配置  */
var mcPic1 = require('../assets/img/homePage/icon_01.png')
var mcPic2 = require('../assets/img/homePage/icon_02.png')
var mcPic3 = require('../assets/img/homePage/icon_03.png')
var mcPic4 = require('../assets/img/homePage/icon_04.png')
var mcPic5 = require('../assets/img/homePage/icon_05.png')
var mcPic6 = require('../assets/img/homePage/icon_06.png')

export default [
  {
    title: '信工新闻眼',
    pic: mcPic1,
    path: {name: 'NewsList', params: {type: 0, title: '信工新闻眼'}}
  },
  {
    title: '掌上组织生活',
    pic: mcPic2,
    path: {name: 'PalmOrganization', params: {title: '掌上组织生活'}}
  },
  {
    title: '党员云互动',
    pic: mcPic3,
    path: {name: 'MemberInteract', params: {title: '党员云互动'}}
  },
  {
    title: '党建一点通',
    pic: mcPic4,
    path: {name: 'NewsList', params: {type: 3, title: '党建一点通'}}
  },
  {
    title: '党员亮身份',
    pic: mcPic5,
    path: {name: 'NewsList', params: {type: 5, title: '党员亮身份'}}
  },
  {
    title: '党史上的今天',
    pic: mcPic6,
    path: {name: 'NewsList', params: {type: 4, title: '党史上的今天'}}
  }
]
