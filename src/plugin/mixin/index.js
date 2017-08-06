
export default function (Vue) {
  Vue.mixin({
    methods: {
      // 自定义的页面激活方法
      activated () {
      }
    },
    // vue 自带页面激活钩子
    activated () {
      if (!this.$router.isBack) {
        // 调用自定义的页面激活方法
        this.activated()
      }
    }
  })
}
