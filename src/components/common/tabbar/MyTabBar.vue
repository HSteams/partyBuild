<!--Created by fjl on 2017/8/8-->
<template>
  <tab-bar @clickItem="clickTabItem" :tabItems="tabItems" :selected="selected"></tab-bar>
</template>

<script>
  import tabbarItems from './tabbarItems'
  import TabBar from './TabBar'
  export default {
    components: {TabBar},
    data () {
      return {
        selected: 0,
        tabItems: tabbarItems
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
      login () {
        this.$router.push({name: 'Login', params: {title: 'rrr'}})
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
    }
  }
</script>

<style lang="less" scoped>
  .MyHeadNav{

  }
</style>
