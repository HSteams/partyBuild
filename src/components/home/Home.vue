<!--Created by fjl on 2017/8/1-->
<!--首页-->
<template>
  <div class="home">
    <!--轮播图-->
    <viwe-pager :data="swipeData" @clickPic="goViwePagerDetail"></viwe-pager>
    <!--多列布局-->
    <much-col-layout :data="muchColData" @clickItem="goMuchColContent"></much-col-layout>
  </div>
</template>

<script>
  import muchColData from '../../appConfig/homeMuchSelect'
  import ViwePager from '../../components/common/viwePager/ViwePager'
  import MuchColLayout from '../../components/common/muchColLayout/MuchColLayout'
  export default{
    name: 'home',
    components: { ViwePager, MuchColLayout },
    data () {
      return {
        newsType: 0,
        swipeData: null,
        muchColData: muchColData
      }
    },
    methods: {

      // 进入轮播图详情页
      goViwePagerDetail (newsId) {
        this.$router.push({ name: 'newsDetailPage', params: {type: this.newsType, id: newsId} })
      },
      // 进入多列布局内容
      goMuchColContent (index) {
        this.$router.push(muchColData[index].path)
      },
      // 请求轮播图片
      reqSwipe () {
        var param = {
          page: 0,
          rows: '5',
          type: 0
        }
        var _this = this
        this.$http.getNewsList(param).then(function (res) {
          var data = res.data
          _this.swipeData = data.rows
        })
      }
    },
    created () {
      this.reqSwipe()
    }
  }
</script>

<style scoped>

</style>

