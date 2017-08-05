<!--Created by fjl on 2017/8/1-->
<!--通知早知道-->
<template>
  <div class="inform">
    <news-list :newsDatas="newsDatas" @clickItem="clickItem"></news-list>
  </div>
</template>


<script>
  import NewsList from '../../components/common/newsList/NewsList'
  export default {
    name: 'inform-page',
    components: {
      NewsList
    },
    data () {
      return {
        newsDatas: [],
        newsType: 2,
        page: 0
      }
    },
    methods: {
      clickItem (index) {
        this.$router.push({
          name: 'NewsDetail',
          params: {
            id: this.newsDatas[index].newsId,
            type: this.newsType,
            title: '通知早知道'
          }
        })
      }
    },
    created () {
      var param = {
        page: this.page, rows: 8, type: this.newsType
      }
      var _this = this
      this.$http.getNewsList(param).then(function (res) {
        var data = res.data
        _this.newsDatas = data.rows
      })
    }
  }
</script>

<style scoped></style>
