<!--Created by fjl on 2017/7/13-->
<template>
  <div class="memberInteract">
    <div class="div1">
      <input type="text" placeholder=" 在党员云互动搜索">
    </div>
    <div class="scroll-content has-header">
     <!-- <h1>hello memberInteract!</h1>-->
      <mt-loadmore style="margin-top: 40px;background-color: #ececec">
          <ul v-for="item in commentList">
          <li class="lig"><img :src="item.header" alt="" class="img1"></li>
           <li class="li1"><button class="btn1">党员互动</button><span>{{ item.username}}</span>
             <div> <img :src="time" alt=""> <span>{{item.currentTime}}</span>
             <img :src="voice" alt=""><span>公开</span></div>
              </li>
            <li class="li3"><span>{{item.content}}</span></li>
         </ul>

      </mt-loadmore>
      <div class="imgFix" @click="save"><img :src="btn" alt="" style="width: 60px;height: 60px;"></div>
    </div>

  </div>
</template>
<script>
  import time from './img1/time.png.zip'
  import voice from './img1/voice.png.zip'
  import btn from './img/btn.png'
  export default {
    name: '',
    data () {
      return {
        title: '',
        commentList: '',
        time: time,
        voice: voice,
        btn: btn
      }
    },
    activated () {
      this.commentList = []
      this.title = this.$route.params.title
      console.log(this.$route.params)
      this.getData()
    },
    methods: {
      getData () {
        var _this = this
        _this.$http.getMemberList().then(function (res) {
          console.log(res.data.rows)
          _this.commentList = res.data.rows
        })
      },
      save () {
        this.$router.push('/forumSave')
      }
    }

  }
</script>

<style scoped lang="less">
  .div1{
    background-color:#ececec;
    height:40px;
    text-align: center;
    position: absolute;
    top:40px;
    width:100%;
    z-index: 0;
  }
  input{
    font-size: 16px;
    width:80%;
    height:25px;
    border-radius: 5px;
    margin-top: 5px;
    text-align: center;
    border: 0;
  }
  img {
    width:50px;
    height:50px;
  }
  ul{
    width:100%;
    height:120px;
    margin-bottom: 15px;
    background-color: white;

  }
  li{ display: table-cell;

    float: left;
    img{ width:16px;
      height:16px;
      vertical-align: middle;
    }
    .img1{
      width:40px;
      height:40px;
      margin: 10px 0 0 10px ;
    }
    .btn1{
      border: 1px solid red;
      color:red;
      background-color: white;
      border-radius: 20px;
      float: right;
      margin-right: 20px;
    }
  }
  .lig{
    width:20%;

  }
  .li1{
    width:80%;
    margin-top: 12px;
     font-size: 14px;
    div{
      color: rgba(0,0,0,0.5);
      margin-top: 5px;
      span{
        vertical-align: middle;
      }
    }
  }
  .li3{
    margin-left: 10px;

  }
  .imgFix{
    position: fixed;
    left: 80%;
    bottom: 15%;
  }
</style>
