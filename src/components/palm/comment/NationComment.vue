<!--Created by lala on 17/8/7-->
<template>
  <div class="NationComment">
    <div class="scroll-content has-header ">

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
    methods: {
      activated () {
        var self = this
        self.$http.commentExpect().then(function (res) {
          console.log(res)
        })
      }
    }
  }
</script>

<style lang='less' scoped>
  .NationComment {

  }
</style>
