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
  var apps = document.getElementsByClassName('app_router_view')
  console.log(apps[0])
  var obj = {
    path: to.path,
    top: apps.length > 0 ? apps[0].scrollTop : 0
  }
  if (from && from.matched[0] &&
    from.matched[0].name === to.matched[0].name) { // from和to一级路由相同
    Router.prototype.pathHistory.replace(obj)
  } else { // from和to一级路由不相
    // 根据路由历史记录出栈还是入栈
    Router.prototype.pathHistory.pushOrPop(obj)
  }
  if (to.meta.auth) {
    if (store.getters.token && to.params === '/Login') {
      next()
    } else if (!store.getters.token) {
      next({
        path: '/Login'
      })
    }
  } else {
    next()
  }
})

export default router
