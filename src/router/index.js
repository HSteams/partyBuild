import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'
import RouteStack from './RouteStack'
Vue.use(Router)
// 定制路由历史记录，栈的深度为20
Router.prototype.pathHistory = new RouteStack(20)

// 记录滚动行为
const scrollBehavior = (to, from, savedPosition) => {
  if (savedPosition) {
    console.log(savedPosition)
    return savedPosition
  } else {
    // const position = {}
    // if (to.hash) {
    //   position.selector = to.hash
    // }
    // if (to.matched.some(m => m.meta.scrollToTop)) {
    //   position.x = 0
    //   position.y = 0
    // }
    return {x: 0, y: 0}
  }
}

const router = new Router({
  mode: 'history',
  scrollBehavior,
  routes
})

router.beforeEach(function (to, from, next) {
  var path = to.path
  if (from && from.matched[0] &&
    from.matched[0].name === to.matched[0].name) { // from和to一级路由相同
    Router.prototype.pathHistory.replace(path)
  } else { // from和to一级路由不相
    // 根据路由历史记录出栈还是入栈
    Router.prototype.pathHistory.pushOrPop(path)
  }
  next()
})

export default router
