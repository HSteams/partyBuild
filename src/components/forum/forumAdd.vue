<template>
<div>
  <input type="text" v-model="title">
</div>
</template>
<script>
export default {
  data () {
    return {
      title: ''
    }
  },
  methods: {
    getData () {
      var id = localStorage.getItem('id')
      this.$http.addComment({id: id, comment: this.title}).then(function () {

      })
    }
  }
}
</script>
<style>

</style>
