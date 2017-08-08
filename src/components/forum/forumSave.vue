<template>
  <div>
    <span>标题：</span>
    <input type="text" placeholder="请输入标题">
    <textarea cols="30" rows="10" placeholder="我要发帖">
   </textarea>
    <button class="btn">发表</button>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        header: {
          title: '我要发帖'
        }
      }
    }
  }
</script>
<style lang="less">
  div {
    text-align: center;
  }

  .btn {
    width: 120px;
    color: #b6000a;
  }

</style>
