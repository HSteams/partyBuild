<!--Created by fjl on 2017/8/1-->
<!--头部组件-->
<template>
  <div class="HeadNav">
    <mt-header fixed class="header_nav"  :title="title">
      <button class="back_btn" slot="left" @click="back">
        <i class="back iconfont icon-back"></i>
      </button>
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
      line-height: 36px;
      width: 4px;
      text-align: left;
      padding: 0;

    }

    .back{
      font-size: 20px;
      color: white;
      font-weight: bold;
    }
  }
</style>
