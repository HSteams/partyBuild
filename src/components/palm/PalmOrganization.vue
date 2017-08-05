<!--Created by fjl on 2017/7/13-->
<!--掌上组织生活-->
<template>
  <div class="palmOrganization">
    <head-nav :title="title"></head-nav>
    <div class="scroll-content has-header">
      <h1>hello palmOrganization!</h1>
    </div>

  </div>
</template>

<script>
  export default {
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
