<template>
<div>
  <div class="has-header">
    <form action="">
  <input type="text" v-model="title1">
    </form>
  </div>
  <button @click="getData">提交</button>
</div>
</template>
<script>
export default {
  data () {
    return {
      header: {
        title: '回复信息'
      },
      title1: ''
    }
  },
  methods: {
    getData () {
      var id = localStorage.getItem('id')
      this.$http.addComment({forum_id: id, comment: this.title1}).then(function (res) {
        console.log(res)
      })
    }
  }
}
</script>
<style>

</style>
