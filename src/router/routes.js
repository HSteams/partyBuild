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
    component: cmp('/main/Main'),
    children: [
      { path: '', redirect: '/home' },
      { path: 'Home', name: 'Home', component: cmp('/home/Home') },

      { path: 'Inform', name: 'Inform', component: cmp('/inform/Inform'), meta: {auth: true} },

      { path: 'MyParty', name: 'MyParty', component: cmp('/my/MyParty'), meta: {auth: true} }
    ]
  },

  { path: '/Login', name: 'Login', component: cmp('/user/Login') },

  { path: '/NewsList/:type/:title', name: 'NewsList', component: cmp('/news/NewsList') },

  { path: '/NewsDetail/:type/:title/:id', name: 'NewsDetail', component: cmp('/news/NewsDetail') },

  { path: '/PalmOrganization/:title', name: 'PalmOrganization', component: cmp('/palm/PalmOrganization') },

  { path: '/MemberInteract/:title', name: 'MemberInteract', component: cmp('/interact/MemberInteract') }
]
