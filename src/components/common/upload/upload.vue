<!--Created by lala on 17/8/6-->
<template>
  <div class="upload" style="width:100%">
    <!--添加图片-->
    <ul class="file" style="width: 100%" >
      <li v-for="item in arr" class="liwidth">
        <img :src="item" alt="" class="igwidth">
      </li>
      <li  class="liwidth">
        <img src="../../../assets/img/homePage/section1/orgnization/thinkReport/add.png"
             @click="handleAdd" class="igwidth">
      </li>
    </ul>
    <input type="file" hidden id="file">
  </div>
</template>

<script>
  import {MessageBox} from 'mint-ui'
  export default {
    name: 'uploadImage',
    data () {
      return {
        myFile: '',
        arr: []
      }
    },
    props: {
      tit: {
        type: String
      }
    },
    methods: {
      handleAdd () {
        var self = this
        document.getElementById('file').click()
        //    用file-reader读取数据
        document.getElementById('file').onchange = function () {
          if (this.files.length === 0) {
            return
          }
          var file = this.files[0]
          var fr = new FileReader()
          fr.readAsDataURL(file)
          fr.onload = function () {
            var base64 = this.result
            self.arr.push(base64)
            var b4 = base64.split(',')[1]
            self.$http.imageUpload({'myFile': b4}).then(function (res) {
              if (res.data.error === 0) {
                MessageBox({
                  title: 'Notice',
                  message: '成功',
                  showCancelButton: true
                })
              }
              self.$emit('selectPicture', res.data.url)
            })
          }
        }
      }
    }
  }
</script>

<style lang='less' scoped>
  .upload {
    .file {
      .liwidth{
        display: inline-block;
        width: 33.33%;
      .igwidth{
        width: 100%;
        height: 100%;
    }
      }

    }
  }
</style>
