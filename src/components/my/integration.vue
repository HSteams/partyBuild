<template>
  <div>
    <div class="has-header">
    <div class="div2" :style="{backgroundImage:'url('+jifen+ ')'}" v-text="totalScore">
    </div>
    </div>
    <div class="jiFen">
      <div>
        <img class="img5" src="../../assets/img/myParty/pointdetail@2x.png" alt="">
        <span style="vertical-align: middle">积分明细</span>
      </div>
      <div>
        <span>积分规则</span>
        <span></span>
      </div>
      <div>
        <span>签到</span>
        <img class="img3" src="../../assets/img/myParty/wenhao@2x.png" alt="">
      </div>
      <div>
        <span>分享</span>
        <span></span>
      </div>
    </div>

  </div>
</template>
<script>
  import jifen from '../../assets/img/myParty/jifen@2x.png'
  export default {
    data () {
      return {
        header: {
          title: '积分列表'
        },
        integral: {
          page: 2,
          rows: 10
        },
        totalScore: '',
        jifen: jifen
      }
    },
    activated () {
      console.log(this.totalScore)
      this.totalScore = this.$store.getters.user.totalScore
    }
  }
</script>
<style lang="less" scoped>
  .img1 {
    width: 100%;
  }

  .jiFen {
    padding-left: 10px;
    div {
      height: 45px;
      width: 100%;
      border-bottom: 1px solid rgba(0, 0, 0, 0.4);
      line-height: 45px;

    }
  }
  .img5 {
    width: 40px;
    vertical-align: middle;
  }

  .img3 {
    width: 20px;
  vertical-align: middle;
    margin-left: 75%;
  }
  .div2{
    width:100%;
    height:125px;
    background-size: 100% 125px;
    background-repeat: no-repeat;
    text-align: center;
    line-height: 125px;
    color: white;
    font-size: 25px;
  }

</style>
