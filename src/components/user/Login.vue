<!--Created by fjl on 2017/7/13-->
<!--登录页面-->
<template>
  <div class="login">
    <head-nav title="登录"></head-nav>
    <div class="scroll-content has-header">

      <img class="logo" src="../../assets/img/homePage/logo.png">

      <form>
        <mt-field class="input" placeholder="Input username" v-model="params.id_card"></mt-field>
        <mt-field class="input" type="password" placeholder="Input username" v-model="params.password"></mt-field>
        <button class="login_btn" @click.prevent="login">登录</button>
      </form>
      <!--<form id="login_form">-->
        <!--<div class="input">-->
          <!--<input type="text" v-model="params.id_card" name="id_card" class="textField" placeholder="身份证号:" id="card">-->
        <!--</div>-->
        <!--<div class="input"><input v-model="params.password" name="password" type="password" class="textField" placeholder="密码:" id="password"></div>-->
        <!--<button class="login_btn" @click.prevent="login">登录</button>-->
      <!--</form>-->
    </div>

  </div>
</template>

<script>
  import { Indicator, MessageBox } from 'mint-ui'
  export default {
    name: 'loginPage',
    components: { Indicator, MessageBox },
    data () {
      return {
        params: {
          id_card: '',
          password: ''
        }
      }
    },
    methods: {
      login () {
        var _this = this

        Indicator.open() // 显示加载等待
        console.log(this.params)
        this.$http.login(this.params).then(function (res) {
          Indicator.close()// 隐藏加载等待
          var data = res.data
          console.log(data)
          if (data.code === 0) {
            MessageBox.alert(data.msg, '提示！')
            return
          }
          // vuex管理用户登录
          _this.$store.commit('login', {token: data.token, user: data.data})

          // 根据状态跳转登录后的页面
          var toPath = _this.$route.query.toPath
          if (toPath) {
            _this.$router.push(toPath)
          } else {
            _this.$router.push('/home')
          }
        }).catch(function (error) {
          Indicator.close()// 隐藏加载等待
          console.log(error)
        })
      }
    },
    deactivated () {
      Indicator.close()// 隐藏加载等待
    }

//    beforeRouteLeave (to, from, next) {
//      if (this.params.id_card || this.params.password) {
//        MessageBox.confirm('确定离开?', '提示!').then(action => {
//          next()
//        }).catch(err => {
//          if (err) {
//            next(false)
//          }
//        })
//      } else {
//        next()
//      }
//    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>

  .login{
    background-color: #CC000D;
    height: 100%;
  }

  .logo{
    display: block;
    margin: 40px auto;
    width: 60%;
  }

  #login_form{
    margin-top: 40px;
  }

  .input{
    margin: 0 30px 20px;
    background: red;
    border-radius: 4px;
    height: 40px;
  }

  .textField{
    font-size: 20px!important;
    background-color: transparent;
    width: 95%!important;
    height: 100%!important;
    color: white!important;
    border: none;
    outline: none;
  }

  .login_btn{
    display: block;
    margin: 5px auto;
    font-size: 24px;
    color: white;
    background-color: #EB292B;
    border: none;
    border-radius: 5px;
    height: 50px;
    width: 80%;
  }



</style>
