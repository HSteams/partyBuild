<template>
  <div class="comment">
    <commonList>
    </commonList>
  </div>
</template>
<script>
  import commonList from './commonList.vue'
  export default {
    data () {
      return {
        header: {
          title: '两学一做讨论区'
        }
      }
    },
    components: {commonList}
  }
</script>
<style>

</style>
