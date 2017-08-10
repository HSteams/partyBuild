<template>
  <div>

 <img src="../../assets/img/myParty/jifen@2x.png" alt="" class="img1 has-header" >
  <div  class="jiFen">
      <div>
       <img class="img2" src="../../assets/img/myParty/pointdetail@2x.png" alt="" >
        <span style="vertical-align: middle">积分明细</span>
      </div>
      <div>
        <div>积分规则</div>
        <img class="img3" src="../../assets/img/myParty/wenhao@2x.png" alt="">
      </div>
      <div>
         <span>签到</span>
        <span></span>
      </div>
      <div>
        <span>分享</span>
        <span></span>
      </div>
    </div>
  </div>
</template>
<script>
   export default {
     data () {
       return {
         header: {
           title: '积分列表'
         }
       }
     }
   }
</script>
<style lang="less">
.img1{
  width:100%;
 background-color:#c7010b;
}
.jiFen{
  margin-top: -5px;

 div{
    height:50px;
    width:100%;
    border-bottom:1px solid rgba(0,0,0,0.4);
    line-height: 50px;
  }
}
  .img2{
    margin-top: -3px;
    width:40px;
  }
  .img3{
    width:100%;
  }
</style>
