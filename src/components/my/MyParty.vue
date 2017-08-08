<!--Created by fjl on 2017/7/13-->
<!--我的党建-->
<template>
  <div>
  <!--<div class="myparty">
   &lt;!&ndash; <button class="logout" @click="logout">退出登录</button>&ndash;&gt;

  </div>-->

    <div class="div2" >
      <img :src="img1" alt="">
    <div>马上登录，获取更多党建咨询</div>
    </div>
    <div class="div1" >
     <div @click="message">
      <img src="../../assets/img/myParty/info@2x.png" alt="">
      <span>个人信息</span>
       <img src="../../assets/img/myParty/大于号.png" alt="">
     </div>
      <div @click="integration">
        <img src="../../assets/img/myParty/point@2x.png" alt="">
        <span>个人量化积分</span>
        <img src="../../assets/img/myParty/大于号.png" alt="">
      </div>
      <div @click="password">
        <img src="../../assets/img/myParty/modifyPassword@2x.png" alt="">
        <span>修改密码</span>
        <img src="../../assets/img/myParty/大于号.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
  import img from '../../assets/img/myParty/headIcon@2x.png'

  export default {
    name: 'my-party',
    data () {
      return {
        header: {
          title: '我的党建',
          hiddenBack: true
        },
        img1: img
      }
    },
    methods: {
      logout () {
        this.$store.commit('logout')
      },
      message () {
        this.$router.push('/message')
      },
      integration () {
        this.$router.push('/integration')
      },
      password () {
        this.$router.push('/password')
      }
    }
  }
</script>

<style scoped>
 .div2{
   background-color: #c7010b;
   text-align: center;
   color: white;
   border-top:2px solid rgba(256,256,256,0.1);
   height:150px;
   padding-top:30px;
 }
 .div2 img{
    width:80px;
    height:80px;
   }
  .div1>div{
    height:60px;
    border-bottom: 1px solid rgba(0,0,0,0.4);
  }
  .div1>div>*{
     vertical-align: middle;
    line-height: 60px;
  }
  .div1 div img:nth-child(1){
    width: 50px;
    height:50px;
  }
 .div1 div img:nth-child(3){
   width: 16px;
   height:16px;
   display: flex;
   float: right;
   padding-top: 22px;
   padding-right: 15px;
 }
</style>
