<template>
  <div class="scroll-content ">
    <!-- <h1>hello memberInteract!</h1>-->

    <mt-loadmore style="margin-top: 40px;background-color: #ececec">
      <ul v-for="item in commentList">
        <li class="lig"><img :src="item.header" alt="" class="img1"></li>
        <li class="li1"><span>{{ item.username}}</span>
          <button class="btn1" @click="forumDetail(item.forumId)">两学一做</button>
          <div><img src="../interact/img/时间.png" alt=""> <span>{{item.currentTime}}</span>
            <img src="../interact/img/声音.png" alt=""><span>公开</span></div>
        </li>
        <li class="li3">
          <span>{{item.content}}</span>
          <div class="huiFu" @click="response(item.forumId, item.comment)">
            <img src="../interact/img/信息.png" alt=""><span>回复</span>
          </div>
        </li>
      </ul>

    </mt-loadmore>
  </div>
</template>
<script>
  export default {
    name: '',
    data () {
      return {
        title: '',
        commentList: ''
      }
    },
    activated () {
      this.title = this.$route.params.title
      console.log(this.$route.params)
      this.getData()
    },
    methods: {
      getData () {
        var _this = this
        _this.$http.getMemberList().then(function (res) {
          _this.commentList = res.data.rows
        })
      },
      forumDetail (id) {
        this.$http.getForumDetail({forum_id: id}).then(function () {
        })
      },
      response (id, comment) {
        this.$router.push('./addComment')
        this.$http.addComment({forum_id: id, comment: comment}).then(function () {})
      }
    }

  }
</script>
<style scoped lang="less">


  img {
    width: 50px;
    height: 50px;
  }

  ul {
    width: 100%;
    height: 120px;
    margin-bottom: 15px;
    background-color: white;

  }

  li {
    display: table-cell;

    float: left;
    img {
      width: 16px;
      height: 16px;
      vertical-align: middle;
    }
    .img1 {
      width: 40px;
      height: 40px;
      margin: 10px 0 0 10px;
    }
    .btn1 {
      border: 1px solid rgba(256, 0, 0, 0.7);
      color: rgba(256, 0, 0, 0.7);
      background-color: white;
      border-radius: 20px;
      float: right;
      margin-right: 20px;
      font-size: 14px;

    }
  }

  .lig {
    width: 20%;

  }

  .li1 {
    width: 80%;
    margin-top: 12px;

    div {
      color: rgba(0, 0, 0, 0.5);
      margin-top: 5px;
      span {
        vertical-align: middle;
        font-size: 14px;
      }
    }
  }

  .li3 {
    width: 100%;
    margin-left: 10px;
    position: relative;
    .huiFu {
      position: absolute;
      left: 75%;
      img {
        width: 25px;
        height: 25px;
      }
      span {
        color: rgba(0, 0, 0, 0.5);
      }
    }

  }
</style>
