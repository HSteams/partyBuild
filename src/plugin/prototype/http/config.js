/**
 * Created by fjl on 2017/7/14.
 */

let base = 'http://192.168.1.110:8081/hhdj'
export default {
  login: `${base}/user/userLogin.do`,
  // 新闻列表和详情
  getNewsContent: `${base}/news/newsContent.do`,

  getNewsList: `${base}/news/newsList.do`,

  getUserInfo: `${base}/user/userInfo.do`,
  changeUserInfo: `${base}/user/modifyInfo.do`,
  changePwd: `${base}/user/updatePwd.do`,

  // 思想汇报
  uploadThoughtReport: `${base}/impress/saveImpress.do`,
  checkReportType: `${base}/report/reportInfo.do`,
  // 心得总结
  uploadPersonalSummary: `${base}/nationComment/submitSummary.do`,
  checkSummary: `${base}/impress/checkByUserId.do`,
  uploadSummary: `${base}/impress/saveImpress.do`,
   // 帖子信息
  getForumList: `${base}/forum/forumList.do`,
  getForumDetail: `${base}/forum/forumDetail.do`,
  addComment: `${base}/forum/addComment.do`,
  saveForum: `${base}/forum/saveForum.do`
}
