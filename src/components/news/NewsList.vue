<!--Created by fjl on 2017/7/13-->
<!--新闻列表-->
<template>
  <div class="news-list">
    <div class="scroll-content has-header">
      <news-list :newsDatas="newsDatas" @clickItem="clickItem"></news-list>
    </div>
  </div>
</template>


<script>
  import NewsList from '../../components/common/newsList/NewsList'
  import HeadNav from '../common/headNav/HeadNav.vue'
  export default {
    components: {
      HeadNav,
      NewsList
    },
    data () {
      return {
        newsDatas: [],
        page: 0
      }
    },
    methods: {
      clickItem (index) {
        this.$router.push({
          name: 'NewsDetail',
          params: {
            type: this.$route.params.type,
            title: this.$route.params.title + '详情',
            id: this.newsDatas[index].newsId
          }
        })
      },
      // 自定义的页面激活方法
      activated () {
        var param = {
          page: this.page, rows: 8, type: this.$route.params.type
        }
        var _this = this
        this.$http.getNewsList(param).then(function (res) {
          var data = res.data
          console.log(data)
          _this.newsDatas = data.rows
        }).catch(function (err) {
          console.error(err)
        })
      }
    }
  }
</script>

<style scoped>

</style>
