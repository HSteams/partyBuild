/**
 * Created by fjl on 2017/7/15.
 */

function cmp (path) {
  // var cmp = require('../components'+path);
  var cmp = resolve => require(['../components' + path], resolve)
  return cmp.default || cmp
}

export default [

  {
    path: '/',
    name: 'main',
    component: cmp('/main/Main'),
    children: [
      { path: '', redirect: '/Home' },

      { path: 'Home', name: 'Home', component: cmp('/home/Home'), meta: {hasTabbar: true} },

      { path: 'Inform', name: 'Inform', component: cmp('/inform/Inform'), meta: {auth: true, hasTabbar: true} },

      { path: 'MyParty', name: 'MyParty', component: cmp('/my/MyParty'), meta: {auth: true, hasTabbar: true} }
    ]
  },

  { path: '/Login', name: 'Login', component: cmp('/user/Login') },

  { path: '/NewsList/:type/:title', name: 'NewsList', component: cmp('/news/NewsList') },

  { path: '/NewsDetail/:type/:title/:id', name: 'NewsDetail', component: cmp('/news/NewsDetail') },

  { path: '/PalmOrganization/:title', name: 'PalmOrganization', component: cmp('/palm/PalmOrganization') },

  { path: '/MemberInteract/:title', name: 'MemberInteract', component: cmp('/interact/MemberInteract') },
  { path: '/Summary/:title', name: 'Summary', component: cmp('/palm/Summary') },
  { path: '/ThoughtReports/:title', name: 'ThoughtReports', component: cmp('/palm/ThoughtReports') },

  { path: '/Comment/:title', name: 'Comment', component: cmp('/palm/Comment') },

  { path: '/FoundOrganization/:title', name: 'FoundOrganization', component: cmp('/palm/FoundOrganization') },
  { path: '/UploadPersonalSummary', name: 'UploadPersonalSummary', component: cmp('/palm/comment/UploadPersonalSummary') },
  { path: '/NationComment', name: 'NationComment', component: cmp('/palm/comment/NationComment') }
]
