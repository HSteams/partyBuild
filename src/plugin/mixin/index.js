export default function (Vue) {
  Vue.mixin({
    methods: {
      // 自定义的页面激活方法
      activated () {
      }
    },
    // vue 自带页面激活钩子
    activated () {
      if (this.header) {
        this.$root.$children[0].$refs.header.title = this.header.title
        console.log()
      }
      if (!this.$router.pathHistory.isBack) {
        // 调用自定义的页面激活方法
        this.activated()
      }
    }
  })
}
