<template>
  <div id="app">

    <!--头部-->
    <header>
      <head-nav ref="headNav"></head-nav>
    </header>

    <!--主体，路由入口-->
    <transition :name="isBack?'slide-right':'slide-left'">
      <keep-alive>
        <router-view :class="{'app_router_view':true,'slide':isSlide}"></router-view>
    </keep-alive>
    </transition>




    <!--底部-->
    <footer v-show="showTabbar">
      <tab-bar @clickItem="clickTabItem" :tabItems="tabItems" :selected="selected"></tab-bar>
    </footer>

  </div>
</template>

<script>
  import HeadNav from './components/common/headNav/HeadNav.vue'
  import tabbarItems from './components/common/tabbar/tabbarItems'
  import TabBar from './components/common/tabbar/TabBar'
  export default {
    components: {HeadNav, TabBar},
    name: 'app',
    data () {
      return {
        selected: 0,
        tabItems: tabbarItems,
        showTabbar: true,
        isSlide: true,
        isBack: false
      }
    },
    methods: {
      // 点击tabbar的item
      clickTabItem (index) {
        this.$router.replace(this.tabItems[index].path)
      },
      // 根据路由设置tabbar选项的选中状态
      setSelected (path) {
        var index = this.find(this.tabItems, 'path', path)
        if (index >= 0) {
          this.selected = index
        }
      },
      /**
       * 找到数组'arr'中某个对象的下标，
       * 该对象的属性名为'key'对应的属性值为'value'
       * @param arr 数组
       * @param key 属性名
       * @param value 属性值
       * @returns {number}
       */
      find (arr, key, value) {
        for (var i = 0; i < arr.length; i++) {
          var obj = arr[i]
          if (obj[key] === value) {
            return i
          }
        }
        return -1
      }
    },
    watch: {
      $route (newValue) {
        // 更新选中状态
        this.setSelected(newValue.fullPath)
      }
    },
    activated () {
      // 更新选中状态
      this.setSelected(this.$route.fullPath)
    },
    created () {
      var _this = this
      this.$router.pathHistory.stateChanged((state) => {
        _this.isSlide = !state
        _this.isBack = state === 2
      })
    }
  }
</script>

<style lang="less">
  @import "./assets/style/public";
  #app {
    .app_router_view{
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
