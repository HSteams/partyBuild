<!--Created by fjl on 2017/8/1-->
<!--新闻列表-->
<template>
  <div class="news-list">
    <ul id="adwance_know_list">
      <li v-for="(item,index) in newsDatas" @click="clickItem(index)">
        <div class="icon" :style="{backgroundImage:'url('+item.pic+')'}"></div>
        <div class="summary">
          <div class="title" v-text="item.title"></div>
          <div class="detail" v-text="item.titledesc"></div>
          <div class="other">
            <span class="time" v-text="item.currentTime"></span>
            <span class="watch">
              <img :src="eye">
              {{item.count}}
            </span>
          </div>
        </div>
      </li>
    </ul>
  </div>


</template>



<script>
  import eyePic from '../../../assets/img/homePage/section1/xgnews/12-eye.png'
  export default {
    props: ['newsDatas'],
    name: 'news-list',
    data () {
      return {
        eye: eyePic
      }
    },
    methods: {
      clickItem (index) {
        this.$emit('clickItem', index)
      }
    }
  }
</script>

<style scoped>
   li{
    position: relative;
    display: flex;
    border-bottom: 1px solid #DADADA;
    align-items: center;
    text-align: left;
  }

   .icon{
    flex: 0 80px;
    margin: 10px;
    height: 80px;
    background-size: cover;
    background-position: center;

  }

   .summary{
    position: relative;
    flex: 1;
    padding-right: 16px;
    height: 80px;
  }

   .title{
    font-weight: bold;
    color: #D50019;
    font-size: 18px;
    height: 40px;
  }
   .detail{
    color: #7F7F7F;
    font-size: 14px;
    margin: 5px 0px;
  }

  .other{
    position: absolute;
    width: 100%;
    bottom: 0;
    color: #ABABAB;
    font-size: 14px;
  }

  .watch{
    float: right;
    margin-right: 16px;

  }

  .watch img{
    height: 14px;
    vertical-align: middle;
  }
</style>

