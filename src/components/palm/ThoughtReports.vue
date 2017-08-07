<!--Created by lala on 17/8/6-->
<template>
  <div class="ThoughtReports">
    <div class="scroll-content has-header" style="width:100%">
      <upload-image @selectPicture="handleAccept" v-if="type==-1"></upload-image>
      <div style="display: block" class="align-center">
        <img src="../../assets/img/homePage/section1/orgnization/thinkReport/checking.png"
             alt="" v-if="type==0">
        <img src="../../assets/img/homePage/section1/orgnization/thinkReport/lose.png"
             alt="" v-if="type==2">
        <img src="../../assets/img/homePage/section1/orgnization/thinkReport/pass.png"
             alt="" v-if="type==1">
      </div>
      <div class="talign">
        <mt-button type="danger" @click="handleSubmit">提交</mt-button>
      </div>
    </div>
  </div>
</template>

<script>
  import {MessageBox} from 'mint-ui'
  import uploadImage from '../common/upload/upload.vue'
  export default {
    data () {
      return {
        header: {
          title: '思想汇报'
        },
        myFile: '',
        arr: [],
        type: -1,
        picList: []
      }
    },
    mounted () {

    },
    components: {
      'uploadImage': uploadImage
    },
    methods: {
      handleAccept (pic) {
        this.picList.push(pic)
        console.log(this.picList)
      },
      checkData () {
        var self = this
        self.$http.checkReportType().then(function (res) {
//          console.log(res)
          self.type = res.data.type
        })
      },
      handleSubmit () {
        var self = this
        var data = new FormData()
        data.append('pic_list', self.picList)
        self.$http.uploadThoughtReport(data).then(function (res) {
          if (res.data.code === 1) {
            self.checkData()
            MessageBox({
              title: 'Notice',
              message: res.data.msg,
              showCancelButton: true
            })
          } else {
            MessageBox({
              title: 'Notice',
              message: res.data.msg,
              showCancelButton: true
            })
          }
        })
      }
    }
  }
</script>

<style lang='less' scoped>
  .ThoughtReports {
    .align-center {
      text-align: center;
      margin-top: 50px;
      img {
        width: 33.33%;
        vertical-align: middle;

      }
    }
    .talign {
      text-align: center;
      display: block;
      margin-top: 100px;
    }
  }
</style>
