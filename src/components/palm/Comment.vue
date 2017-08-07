<!--Created by lala on 17/8/6-->
<template>
  <div class="Comment">
    <div class="scroll-content has-header" >
      <div class="top-margin">
        <div class="align-center">
          <mt-button type="danger" @click="personalInfo">个人总结</mt-button>
        </div>
        <div class="align-center">
          <mt-button type="danger" @click="commentInfo">民主评议</mt-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        header: {
          title: '民主评议'
        }
      }
    },
    mounted () {

    },
    methods: {
      personalInfo () {
        this.$router.push('/uploadPersonalSummary')
      },
      commentInfo () {
        this.$router.push('/NationComment')
      }
    }
  }
</script>

<style lang='less' scoped>
  .Comment{
    .top-margin{
      margin-top: 100px;
      .align-center{
        text-align: center;
         margin-top:30px ;
      }
    }

  }
</style>
