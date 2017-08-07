<!--Created by fjl on 2017/8/1-->
<!--头部组件-->
<template>
  <div class="HeadNav">
    <mt-header v-show="!hidden" fixed class="header_nav"  :title="title">
      <div slot="left">
        <mt-button class="back-btn" v-show="!hiddenBack"  @click="back">
          <img src="./back.png" alt="">
        </mt-button>
        <mt-button class="btn"  v-for="(item,index) in leftBtns"  @click="clickLeftBtn(index)">
          <img v-if="item.pic" :src="item.pic" alt="">
          <span v-if="item.text" v-text="item.text"></span>
        </mt-button>
      </div>

      <div slot="right">
        <mt-button class="btn" v-for="(item,index) in rightBtns"  @click="clickRightBtn(index)">
          <img v-if="item.pic" :src="item.pic" alt="">
          <span v-if="item.text" v-text="item.text"></span>
        </mt-button>
      </div>


    </mt-header>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        title: '',
        hiddenBack: true,
        hidden: false,
        leftBtns: [],
        rightBtns: []
      }
    },
    name: 'head-nav',
    methods: {
      clickLeftBtn () {

      },
      clickRightBtn () {

      },
      back () {
//        if (this.$router.pathHistory.length <= 1) {
//          return
//        }
        this.$router.back()
      }
    }
  }
</script>

<style lang="less" scoped>
  .HeadNav{

  }
</style>
