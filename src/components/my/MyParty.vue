<!--Created by fjl on 2017/7/13-->
<!--我的党建-->
<template>
  <div class="myparty">
    <h1>my-party</h1>

    <button class="logout" @click="logout">退出登录</button>
  </div>


</template>

<script>
  export default {
    name: 'my-party',
    methods: {
      logout () {
        this.$store.commit('logout')
      }
    }
  }
</script>

<style scoped>

</style>
