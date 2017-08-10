<template>
  <div>
    <form action="">
      <p style="padding-top: 15px">旧密码：</p>
      <input type="text" placeholder="输入旧密码" v-model="rule.oldPwd">
      <P> 新密码：</P>
      <input type="text" placeholder="输入新密码" v-model="rule.newPwd">
      <input type="text" placeholder="再次输入新密码" v-model="newPwds">
    </form>
    <button @click="getData" class="btn">提交</button>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        header: {
          title: '修改密码'
        },
        rule: {
          oldPwd: '',
          newPwd: ''
        },
        newPwds: ''
      }
    },
    created () {
    },
    methods: {
      getData () {
        if (this.rule.newPwd === this.newPwds) {
          this.$http.changePwd(this.rule).then(function (res) {
            console.log(res)
          })
        }
      }
    }
  }
</script>
<style>
  form {
    margin-top: 40px;
  }

  input {
    width: 90%;
    height: 40px;
    border: 2px solid rgba(1, 1, 1, 0.3);
    border-radius: 5px;
    margin-bottom: 15px;
    font-size: 18px;
    margin-left: 5%;
  }

  p {
    margin-left: 5%;
  }

  .btn {
    width: 100px;
    height: 30px;
    background-color: #b6000a;
    border: 0;
    color: white;
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;

    margin: auto;
    font-size: 16px;
    border-radius: 5px;
  }
</style>
