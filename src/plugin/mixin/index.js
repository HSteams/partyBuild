export default function (Vue) {
  Vue.mixin({
    methods: {
      // 自定义的页面激活方法
      activated () {
      }
    },
    // vue 自带页面激活钩子
    activated () {
      console.log(this.$router.pathHistory.top.top)
      if (!this.$router.pathHistory.isBack) {
        // 调用自定义的页面激活方法
        this.activated()
      }
      // 设置滚动位置
      document.body.scrollTop = this.$router.pathHistory.top.top
      // 中间路由，不设置头部导航
      if (this.isMiddlePage) {
        return
      }

      // 程序入口组件
      var app = this.$root.$children[0]
      // 公共头部导航
      var headNav = app.$refs.headNav
      if (this.header) {
        headNav.title = this.header.title || this.$route.params.title || ''
        headNav.hiddenBack = this.header.hiddenBack
        headNav.hidden = this.header.hidden
        headNav.leftBtns = this.header.leftBtns
        headNav.rightBtns = this.header.rightBtns
        headNav.clickLeftBtn = this.clickLeftBtn
        headNav.clickRightBtn = this.clickRightBtn
      } else if (this.$route.params.title) {
        headNav.title = this.$route.params.title || ''
        headNav.hiddenBack = false
        headNav.hidden = false
        headNav.leftBtns = []
        headNav.rightBtns = []
        headNav.clickLeftBtn = null
        headNav.clickRightBtn = null
      }

      if (this.$router.currentRoute.meta.isTabItem) {
        app.showTabbar = true
      } else {
        app.showTabbar = false
      }
    }
  })
}
