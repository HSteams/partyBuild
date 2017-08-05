<!--Created by fjl on 2017/7/13-->
<!--新闻详情-->
<template>
  <div class="news-detail">
    <head-nav :title="params.title"></head-nav>
    <div class="scroll-content has-header">
      <div class="title" v-text="data.title"></div>
      <div class="content" v-text="data.titledesc"></div>
      <div v-html="data.content"></div>
      <img :src='data.pic' class="pic">
    </div>
  </div>
</template>

<script>
  import { Indicator } from 'mint-ui'
  import HeadNav from '../common/headNav/HeadNav.vue'
  export default {
    components: {HeadNav},
    name: 'news-detail-page',
    data () {
      return {
        params: {},
        data: {}
      }
    },
    activated () {
      // 获取路由参数
      this.params = this.$route.params
      this.data = {}
      var _this = this
      Indicator.open()// 显示加载等待
      this.$http.getNewsContent({newsId: this.params.id}).then(function (res) {
        var data = res.data
        Indicator.close()// 隐藏加载等待
        if (data.code === 1) {
          _this.data = data.data
        } else {

        }
      }).catch(function () {
        Indicator.close()// 隐藏加载等待
      })
    },
    deactivated () {
      Indicator.close()// 隐藏加载等待
    }
  }
</script>

<style scoped>
  .news-detail .title{

    font-size: 22px;
    margin-top : 10px;
  }

  .news-detail .pic{
    margin: 10px 0px;
    height: 300px;
    width: 450px;
  }

  .news-detail .content{
    text-align: left;
    font-size: 18px;
    color: #666;
    line-height: 30px;
    margin: 0px 10px;
  }
</style>
