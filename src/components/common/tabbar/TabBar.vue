<!--Created by fjl on 2017/8/1-->
<!--底部选项卡-->
<template>
  <div>
    <mt-tabbar class="tabbar" fixed>
      <mt-tab-item @click.native.prevent="clickItem(index)" :class="{'tabbar_item':true,'actived':selected == index}" v-for="(item,index) in tabItems" :id="index">
        <img slot="icon" :src="selected == index?item.selected_pic:item.normal_pic">
        {{item.title}}
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
  export default {
    props: {
      selected: {
        required: true,
        type: Number
      },
      tabItems: {
        required: true,
        type: Array
      }
    },
    methods: {
      clickItem (index) {
        this.$emit('clickItem', index)
      }
    }
  }
</script>

<style lang="less">
  @import "../../../assets/style/var";
  .tabbar{
    height: @footer-height;
    .tabbar_item{
      padding: 4px;
      color: gray!important;
      .mint-tab-item-icon{
        height: 20px;
        img{
          width: auto;
          margin: auto;
        }
      }
    }

    .tabbar_item.actived{
      color: #C7010B!important;
      background: transparent!important;
      position: relative;
    }
    .tabbar_item.actived:before{
      content:'';
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 2px;
      border-radius: 1px;
      background: #C7010B;
    }

  }
</style>
