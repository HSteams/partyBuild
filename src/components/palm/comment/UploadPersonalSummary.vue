<!--Created by lala on 17/8/7-->
<!--Created by lala on 17/8/6-->
<template>
  <div class="Summary">
    <div class="scroll-content has-header" style="width:100%">
      <upload-image @selectPicture="handleAccept"></upload-image>
      <div class="talign">
        <mt-button type="danger" @click="handleSubmit">提交总结</mt-button>
      </div>
    </div>
  </div>
</template>

<script>
  import {MessageBox} from 'mint-ui'
  import uploadImage from '../../common/upload/upload.vue'
  export default {
    data () {
      return {
        header: {
          title: '个人心得总结'
        },
        myFile: '',
        arr: [],
        type: -1,
        picList: [],
        commentId: ''
      }
    },
    activated () {
//      this.$http.nationCommentJudge().then(function (res) {
//        console.log(res)
//        var self = this
//        if(res.data.type !== 0){
//            return
//        }
//      }).catch()
      this.$http.getUserInfo().then(function (res) {
        console.log(res)
        this.commentId = res.data.commentId
      }).catch()
    },
    components: {
      'uploadImage': uploadImage
    },
    methods: {
//        接收子组件数据
      handleAccept (pic) {
        this.picList.push(pic)
//        console.log(this.picList)
      },
//      FormData提交审核
      handleSubmit () {
        var self = this
        var data = new FormData()
        data.append('pic_list', self.picList)
        self.$http.uploadPersonalSummary(data).then(function (res) {
//          console.log(res)
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
    },
    watched: {}
  }
</script>

<style lang='less' scoped>
  .Summary {
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
