<template>
  <div>
    <div v-for="(item,index) in message" @click="clickItem(index)" class="item">
    </div>
  </div>
</template>
<script>
export default{
  props: ['message'],
  name: 'picture-col',
  data () {
    return {}
  },
  methods: {
    clickItem (index) {
      this.$emit('clickItem', index)
    }
  }
}
</script>
<style lang="less">
  .item{
    width:33.33%;
    height:90px;
    float:left
  }
</style>
