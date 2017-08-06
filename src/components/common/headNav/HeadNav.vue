<!--Created by fjl on 2017/8/1-->
<!--头部组件-->
<template>
  <div class="HeadNav">
    <mt-header fixed class="header_nav"  :title="title">
      <mt-button class="back_btn" slot="left" @click="back">
        <img src="./back.png" alt="" class="img-btn">
      </mt-button>
    </mt-header>
  </div>
</template>

<script>
  export default {
    props: {
      title: {
        type: String
      }
    },
    name: 'head-nav',
    methods: {
      back () {
        this.$router.go(-1)
      }
    }
  }
</script>

<style lang="less" scoped>
  .HeadNav{
    .back_btn{
      border: none;
      background-color: #C7010B;
      height: 40px;
      width: 60px;
      text-align: left;
      padding: 0;
      img{
        width: 30px;
        height: 30px;
      }

    }
    .back{

      font-size: 20px;
      color: white;
      font-weight: bold;

    }
  }
</style>
