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
  uploadSummary: `${base}/impress/saveImpress.do`
}
