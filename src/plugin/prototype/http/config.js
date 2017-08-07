/**
 * Created by fjl on 2017/7/14.
 */

let base = 'http://192.168.1.110:8081/hhdj'
export default {
  login: `${base}/user/userLogin.do`,
  // 新闻列表和详情
  getNewsContent: `${base}/news/newsContent.do`,
  getNewsList: `${base}/news/newsList.do`,
  // 思想汇报
  uploadThoughtReport: `${base}/impress/saveImpress.do`,
  checkReportType: `${base}/report/reportInfo.do`,
  // 心得总结
  uploadPersonalSummary: `${base}/nationComment/submitSummary.do`,
  checkSummary: `${base}/impress/checkByUserId.do`,
  uploadSummary: `${base}/impress/saveImpress.do`,
  //  图片上传
  imageUpload: `${base}/image/uploadBase64.do`,
  //  民主评议
  nationCommentJudge: `${base}/nationComment/judgeComment.do`,
  brabchList: `${base}/branch/findAll.do`,
  commentExpect: `${base}/nationComment/getComment.do`,
  partyUserList: `${base}/nationComment/userList.do`,
  judgeIsComment: `${base}/nationComment/isComment.do`,
  getPersonalSummary: `${base}/nationComment/userSummary.do`,
  uploadComment: `${base}/nationComment/userSummary.do`

}
