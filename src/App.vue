<template>
  <div id="app">
    <!--头部-->
    <header id="header">
      <head-nav ref="headNav"></head-nav>
    </header>
    <!--主体，程序入口-->
    <transition :name="$router.pathHistory.isBack?'slide-right':'slide-left'">
      <keep-alive>
        <router-view id="app_router_view" class="app_router_view slide"></router-view>
    </keep-alive>
    </transition>
    <footer id="footer">
      <transition :name="$router.pathHistory.isBack?'slide-right':'slide-left'">
      <my-tab-bar v-show="$router.currentRoute.meta.hasTabbar" class="slide"></my-tab-bar>
      </transition>
    </footer>
  </div>
</template>

<script>
  import HeadNav from './components/common/headNav/HeadNav'
  import MyTabBar from './components/common/tabbar/MyTabBar'
  export default {
    components: {HeadNav, MyTabBar},
    name: 'app'
  }
</script>

<style lang="less">
  @import "./assets/style/public";
  #app {
    .app_router_view{
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      margin: auto;
      overflow: auto;
    }
    // 隐藏滚动条
    .app_router_view::-webkit-scrollbar{
      width: 0;
      height: 0;
    }
    .slide{
      transition: all 0.5s;
    }
    .slide-left-enter, .slide-right-leave-to {

      transform: translate(100%, 0);
    }

    .slide-left-leave-to, .slide-right-enter {
      transform: translate(-100%, 0);
    }

    .fade-enter {
      opacity: 0;
    }
  }
</style>
