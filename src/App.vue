<template>
  <div id="app">
    <!--头部-->
    <header id="header">
      <head-nav ref="headNav"></head-nav>
    </header>
    <!--主体，程序入口-->
    <transition :name="$router.pathHistory.isBack?'slide-right':'slide-left'">
      <keep-alive>
        <router-view :class="{'app_router_view':true,'slide':true}"></router-view>
    </keep-alive>
    </transition>
    <footer id="footer">
      <my-tab-bar v-show="$router.currentRoute.meta.hasTabbar"></my-tab-bar>
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
      width: 100%;
      position: absolute;
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
