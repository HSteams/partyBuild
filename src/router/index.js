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
  // var top = document.body.scrollTop || document.documentElement.scrollTop
  var path = to.path
  if (to.meta.isTabItem && from.meta.isTabItem) { // from和to一级路由相同
    console.log(true)
    Router.prototype.pathHistory.replace(path)
  } else { // from和to一级路由不相
    // 根据路由历史记录出栈还是入栈
    Router.prototype.pathHistory.pushOrPop(path)
  }

  next()
})

export default router
