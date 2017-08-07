<template>
  <header class="HeadNav">
  <mt-header title="个人党建信息">
      <router-link to="/MyParty" slot="left">
        <mt-button icon="back" class="back_btn"><img src="" alt=""></mt-button>
      </router-link>
      <mt-button icon="more" slot="right" @click="getType">{{type==1?'编辑':'保存'}}</mt-button>
    </mt-header>
  </header>
</template>
<script>
  export default{
    name: 'head-nav1',
    data () {
      return {
        type: 1
      }
    },
    methods: {
      getType () {
        this.type = !this.type
      }
    }
  }
</script>
<style lang="less" scoped>
  .HeadNav {
    .back_btn {
      border: none;
      background-color: #C7010B;
      height: 40px;
      width: 60px;
      text-align: left;
      padding: 0;
      img {
        width: 30px;
        height: 30px;
      }

    }
    .back {

      font-size: 20px;
      color: white;
      font-weight: bold;

    }
  }
</style>
