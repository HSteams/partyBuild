<!--Created by fjl on 2017/7/13-->
<!--我的党建-->
<template>
  <div class="has-footer">
    <div class="div2">
     <img :src='personData' alt="" v-if="personData">
      <img :src="img1" alt="" v-if="!personData">
      <div id="div1"></div>
    </div>
    <div class="div1">
      <div @click="message">
        <img src="../../assets/img/myParty/info@2x.png" alt="">
        <span>个人信息</span>
        <img src="../../assets/img/myParty/dayuhao.png" alt="">
      </div>
      <div @click="integration">
        <img src="../../assets/img/myParty/point@2x.png" alt="">
        <span>个人量化积分</span>
        <img src="../../assets/img/myParty/dayuhao.png" alt="">
      </div>
      <div @click="password">
        <img src="../../assets/img/myParty/modifyPassword@2x.png" alt="">
        <span>修改密码</span>
        <img src="../../assets/img/myParty/dayuhao.png" alt="">
      </div>
    </div>
    <div class="align-center">
      <button @click="logout" class="btn2">退出登录</button>
    </div>
  </div>
</template>
<script>
  import {MessageBox} from 'mint-ui'
  import img from '../../assets/img/myParty/headIcon@2x.png'
  export default {
    data () {
      return {
        header: {
          title: '我的党建',
          hiddenBack: true
        },
        img1: img,
        personData: ''
      }
    },
    mounted () {
      this.getData()
    },
    methods: {
      getData () {
        var _this = this
        this.$http.getUserInfo().then(function (res) {
          _this.personData = res.data.data.header
        })
      },
      logout () {
        MessageBox.confirm('确定执行此操作').then(action => {
          this.$store.commit('logout')
          this.$router.push('/home')
          document.getElementById('div1').innerHTML = '马上登录，获取更多党建咨询'
        }).catch(action => {})
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

<style lang="less" scoped>
  @import "../../assets/style/var";

  .header {
    background-color: transparent;
    height: @header-height;
    font-size: @header-fontsize;
  }

  .div2 {
    background-color: @header-backColor;
    text-align: center;
    color: white;
    border-top: 2px solid rgba(256, 256, 256, 0.1);
    height: 150px;
    padding-top: 30px;
  }

  .div2 img {
    width: 80px;
    height: 80px;
    margin-top: 20px;

  }

  .div1 > div {
    height: 50px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.4);
  }

  .div1 > div > * {
    vertical-align: middle;
    line-height: 50px;
    margin-left: 10px;
  }

  .div1 div img:nth-child(1) {
    width: 40px;
    height: 40px;
  }

  .div1 div img:nth-child(3) {
    width: 16px;
    height: 16px;
    display: flex;
    float: right;
    padding-top: 17px;
    padding-right: 15px;

  }

  .align-center {
    text-align: center;
    .btn2 {
      width: 80%;
      margin-top: 80px;
      height: 36px;
      background-color: #c7010b;
      border: 0;
      top: 65%;
      border-radius: 10px;
      color: white;
      font-size: 18px;
    }
  }

</style>
