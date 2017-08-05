<!--Created by fjl on 2017/8/1-->
<!--多列布局-->
<template>
  <div class="much-col-layout">
    <ul class="mutiple_select">
      <li v-for="(item,index) in data" @click="clickItem(index)" class="item">
        <img :src="item.pic">
        <div v-text="item.title"></div>
      </li>
    </ul>
  </div>
</template>



<script>
  export default {
    props: ['data'],
    name: 'much-col-layout',
    methods: {
      clickItem (index) {
        this.$emit('clickItem', index)
      }
    }
  }
</script>


<style scoped>

  .mutiple_select{

    display: flex;
    flex-wrap: wrap;
    margin-top: 0px;
  }

  .mutiple_select .item{
    flex: 1 33%;
    text-align: center;
    border: none;
    font-size: 13px;
    margin-top: 12px;
    color: #666;
  }

  .mutiple_select .item img{
    width: 100%;
    margin-bottom: 5px;
    height: 39px;
    width: 39px;
  }

</style>
