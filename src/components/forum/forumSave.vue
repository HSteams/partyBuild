<template>
  <div class="has-header">
    <span>标题：</span>
    <input type="text" placeholder="请输入标题" v-model="title">
    <div><textarea cols="30" rows="10" placeholder="我要发帖" v-model="content">
   </textarea></div>
    <button class="btn" @click="getData">发布</button>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        header: {
          title: '我要发帖'
        },
        title: '',
        content: ''
      }
    },
    methods: {
      getData () {
        this.$http.saveForum({content: this.content}).then(function (res) {
          console.log(res)
        })
      }
    }
  }
</script>
<style lang="less" scoped>
 .has-header {
padding-left: 5%;
 input{
   font-size: 16px;
 }
 textarea{
   font-size: 16px;
 }
  >*{
      margin-top: 20px;

    }
  .btn {
    width: 120px;
   background-color: #b6000a;
    height:36px;
    border:0;
    font-size: 18px;
    color: white;

  }
  }
</style>
