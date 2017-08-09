<template>
  <div>
   <!-- <mt-header >
      <router-link to="/MyParty" slot="left">
        <mt-button icon="back" class="back_btn"></mt-button>
      </router-link>
      <mt-button slot="right" @click="getType">{{type == true ? '编辑' : '保存'}}</mt-button>
    </mt-header>-->
    <form  name="form1" class="has-header">
     <div style="height: 41px">
       <img :src="personData.header" alt="" style="width: 30px;height:30px;padding-right: 100px;vertical-align: middle"></div>
      <div>头像</div>
      <div><input type="text" :readonly='!isEdit' v-model='personData.age' class="ipt1"></div>
      <div>年龄</div>
     <div><input type="text" v-model="personData.branchId" class="ipt1" :readonly='!isEdit'></div>
      <div>身份证</div>
      <div><input type="text" v-model="personData.address" class="ipt1" :disabled='!isEdit'></div>
      <div>家庭住址</div>
      <div><input type="text" v-model="personData.birthday" class="ipt1" :disabled='!isEdit'></div>
      <div>生日</div>
      <div><input type="text" value="男" v-if="personData.sex" class="ipt1" :disabled='!isEdit'>
        <input type="text" value="女" v-if="!personData.sex" class="ipt1" :disabled='!isEdit'></div>
      <div>性别  </div>
      <div><input type="text" class="ipt1" v-model="personData.education" :disabled='!isEdit'></div>
      <div>最高学历</div>
      <div><input type="text" class="ipt1" v-model="personData.jobRank" :disabled='!isEdit'></div>
      <div>职称</div>
      <div><input type="text" v-model="personData.salary" class="ipt1" :disabled='!isEdit'></div>
      <div>薪资水平</div>
      <div><input type="text" v-model="personData.joinPartyTime" :disabled='!isEdit'></div>
      <div>入党时间</div>
      <div><input type="text" v-model="personData.username" :disabled='!isEdit'></div>
      <div>当前身份</div>
    </form>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        personData: {},
        type: true,
        isEdit: false,
        header: {
          title: '个人党建信息',
          rightBtns: [{text: '编辑'}]
        }
      }
    },
    activated () {
      this.getData()
    },
    methods: {
      getData () {
        var _this = this
        this.$http.getUserInfo().then(function (res) {
          console.log(res.data.data)
          _this.personData = res.data.data
          console.log(_this.personData)
        })
      },
     /* getType () {
        var _this = this
        this.type = !this.type
        if (this.type === false) {
          _this.ChangeInfo()
        }
      }, */
      ChangeInfo () {
        var _this = this
        this.$http.changeUserInfo({age: this.personData.age}).then(function (res) {
          console.log(res)
          if (res.data.code === 1) {
            _this.getData()
          }
        })
      },
      clickRightBtn (index) {
        if (this.header.rightBtns[index].text === '保存') {
          this.header.rightBtns[index].text = '编辑'
          this.isEdit = false
          this.ChangeInfo()
        } else {
          this.header.rightBtns[index].text = '保存'
          this.isEdit = true
          this.ChangeInfo()
        }

//        if (this.type === false) {
//          _this.ChangeInfo()
//        }
      }
    }
  }
</script>
<style lang="less">

  form div:nth-child(2n-1) {
    float: right;
    line-height: 40px;
  }

  form div:nth-child(2n) {
    line-height: 40px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  }
   input {
     border:0;
   }
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

  button {

    font-size: 16px;
    color: white;
    font-weight: bold;

  }
</style>
