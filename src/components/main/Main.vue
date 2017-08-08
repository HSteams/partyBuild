<!--Created by fjl on 2017/8/1-->
<!--入口组件,tabbar页面-->
<template>
  <div class="Main">
      <keep-alive><router-view></router-view></keep-alive>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        header: {
          hiddenBack: true
        },
        // 标记为中间路由组件
        isMiddlePage: true
      }
    }
  }
</script>

<style lang="less" scoped>
  .Main{

  }
</style>
