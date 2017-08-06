<template>
  <div id="app">
    <transition :name="$router.isBack?'slide-right':'slide-left'">
      <keep-alive>
        <router-view class="app_router_view"></router-view>
      </keep-alive>
    </transition>

  </div>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {
      }
    }
  }
</script>

<style lang="less">
  @import "./assets/style/public";
  #app {
    .app_router_view{
      position: absolute;
      transition: all 0.5s;
      height: 100%;
      width: 100%;
    }
    .slide-left-enter, .slide-right-leave-to {
      transform: translate(100%, 0);
    }

    .slide-left-leave-to, .slide-right-enter {

      transform: translate(-100%, 0);
    }

    /*.fade-enter {*/
      /*opacity: 0;*/
    /*}*/
  }
</style>
