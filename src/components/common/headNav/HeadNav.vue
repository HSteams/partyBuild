<!--Created by fjl on 2017/8/1-->
<!--头部组件-->
<template>
  <div class="HeadNav">
    <mt-header v-show="!header.hidden" fixed class="header_nav"
               :style="{'background-color':header.backColor || '#C7010B'}" :title="header.title">
      <div slot="left">
        <mt-button class="back-btn" v-show="!header.hiddenBack" @click="back">
          <img src="./back.png" alt="">
        </mt-button>
        <mt-button class="btn" v-for="(item,index) in header.leftBtns" @click="clickLeftBtn(index)">
          <img v-if="item.pic" :src="item.pic" alt="">
          <span v-if="item.text" v-text="item.text"></span>
        </mt-button>
      </div>

      <div slot="right">
        <mt-button class="btn" v-for="(item,index) in header.rightBtns" @click="clickRightBtn(index)">
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
        header: {
          title: '',
          hiddenBack: true,
          hidden: false,
          backColor: '#C7010B',
          leftBtns: [],
          rightBtns: []
        }
      }
    },
    name: 'head-nav',
    methods: {
      clickLeftBtn () {

      },
      clickRightBtn () {
      },
      back () {
        var self = this
        this.$router.pathHistory.clickBack = true
        if (self.$route.query.from) {
          self.$router.go(-2)
        } else {
          self.$router.back()
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  @import "../../../assets/style/var";

  .HeadNav {
    /*头部导航设置*/
    .header_nav {
      background: @header-backColor;
      font-size: 18px;
      font-weight: bold;
      height: @header-height;
      .back-btn {
        border: none;
        background-color: transparent;
        height: @header-height;
        width: 60px;
        text-align: left;
        padding: 0;
        img {
          width: 30px;
          height: 30px;
        }
      }
      .btn {
        border: none;
        min-width: 40px;
        height: 40px;
        background-color: transparent;
        padding: 0;
        img {
          height: 30px;
          vertical-align: middle;
        }
      }
    }
  }
</style>
