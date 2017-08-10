import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'
import RouteStack from './RouteStack'
import store from '../store'

Vue.use(Router)
// 定制路由历史记录，栈的深度为20
Router.prototype.pathHistory = new RouteStack(20)

const router = new Router({
  routes
})

router.beforeEach(function (to, from, next) {
  // 获取App组件中的route-view
  var apps = document.getElementsByClassName('app_router_view')
  // 记录滚动位置
  var obj = {
    top: apps.length > 0 ? apps[0].scrollTop : 0
  }
  if (from.meta.hasTabbar) { // 是tabbar的内容
    from.meta.top = obj.top
  }
  if (!from.meta.hasTabbar || !to.meta.hasTabbar) { // from和to存在一个不是tabbar的内容
    Router.prototype.pathHistory.pushOrPop(obj)
  }

  if (to.meta.auth && !store.getters.token) {
    next({
      path: '/Login',
      query: {
        toPath: to.path,
        fromPath: from.path
      }
    })
  } else {
    next()
  }
})

export default router
