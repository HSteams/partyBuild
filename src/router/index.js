import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'
import RouteStack from './RouteStack'
Vue.use(Router)
// 定制路由历史记录，栈的深度为20
Router.prototype.pathHistory = new RouteStack(20)
const router = new Router({
  routes
})

router.beforeEach(function (to, from, next) {
  var obj = {
    path: to.path,
    top: document.body.scrollTop || document.documentElement.scrollTop
  }
  if (from && from.matched[0] &&
    from.matched[0].name === to.matched[0].name) { // from和to一级路由相同
    Router.prototype.pathHistory.replace(obj)
  } else { // from和to一级路由不相
    // 根据路由历史记录出栈还是入栈
    Router.prototype.pathHistory.pushOrPop(obj)
  }
  next()
})

export default router
