<!--Created by fjl on 2017/8/1-->
<!--入口组件,tabbar页面-->
<template>
  <div class="Main">
    <mt-header fixed class="header_nav"  :title="selected == 0?'':tabItems[selected].title">
      <router-link v-show="selected == 0" to="/" slot="left">
        <img class="party_logo" src="../../assets/img/homePage/logo.png" alt="">
      </router-link>
      <router-link  v-show="selected == 0" to="/login" slot="right">
        <mt-button id="login_btn" v-show="!this.$store.getters.token">登录</mt-button>
      </router-link>
    </mt-header>

    <main class="scroll-content has-header has-footer">
      <keep-alive><router-view></router-view></keep-alive>
    </main>

    <tab-bar @clickItem="clickTabItem" :tabItems="tabItems" :selected="selected"></tab-bar>

  </div>
</template>

<script>
  import tabbarItems from '../common/tabbar/tabbarItems'
  import TabBar from '../common/tabbar/TabBar'
  import HeadNav from '../common/headNav/HeadNav'
  export default {
    components: {HeadNav, TabBar},
    data () {
      return {
        selected: 0,
        tabItems: tabbarItems
      }
    },
    methods: {
      // 点击tabbar的item
      clickTabItem (index) {
        this.$router.push(this.tabItems[index].path)
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
    created () {
      // 更新选中状态
      this.setSelected(this.$route.fullPath)
    }
  }
</script>

<style lang="less" scoped>
  .Main{
    .header_nav #login_btn{
      color: white;
    }

    .header_nav .party_logo{
      width: 130px;
      vertical-align: middle;
    }
  }
</style>
