<!--Created by fjl on 2017/8/1-->
<!--首页-->
<template>
  <div class="home has-header has-footer">
    <img class="logo" src="../../assets/img/homePage/logo.png"/>
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
        header: {
          hiddenBack: true,
          rightBtns: [{text: '登录'}]
        },
        newsType: 0,
        swipeData: null,
        muchColData: muchColData
      }
    },
    methods: {
      clickRightBtn () {
        this.$router.push('/Login')
      },

      // 进入轮播图详情页
      goViwePagerDetail (newsId) {
        this.$router.push({ name: 'NewsDetail', params: {title: '轮播图详情', type: this.newsType, id: newsId} })
      },

      // 请求轮播图片// 进入多列布局内容
      goMuchColContent (index) {
        this.$router.push(muchColData[index].path)
      },
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
  .logo{
    position: fixed;
    left: 4.5px;
    top: 4.5px;
    height: 35px;
    z-index: 10;
  }
</style>

