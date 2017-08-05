<!--Created by fjl on 2017/7/13-->
<template>
  <div class="memberInteract">
    <head-nav :title="title"></head-nav>
    <div class="scroll-content has-header">
      <h1>hello memberInteract!</h1>
    </div>

  </div>
</template>

<script>
  export default {
    name: '',
    data () {
      return {
        title: ''
      }
    },
    created () {
      this.title = this.$route.params.title
    }
  }
</script>

<style scoped>

</style>
