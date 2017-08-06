<!--Created by fjl on 2017/7/13-->
<!--掌上组织生活-->
<template>
  <div class="palmOrganization">
    <head-nav class="fixed" :title="title"></head-nav>

    <div class="scroll-content has-header">
      <img src="../../assets/img/homePage/section1/orgnization/banner1.png" alt="" class="image-h">
      <!--多列布局-->
      <much-col-layout :data="muchColData" @clickItem="goMuchColContent"></much-col-layout>
    </div>

  </div>
</template>

<script>
  import muchColData from '../../appConfig/organization'
  import MuchColLayout from '../../components/common/muchColLayout/MuchColLayout'
  export default {
    name: 'organization',
    components: { MuchColLayout },
    data () {
      return {
        title: '',
        muchColData: muchColData
      }
    },
    created () {
      this.title = this.$route.params.title
    },
    methods: {
      // 进入多列布局内容
      goMuchColContent (index) {
        this.$router.push(muchColData[index].path)
      }
    }
  }
</script >

<style lang="less" scoped>
  .palmOrganization {
  .scroll-content {
    .image-h {
      height: 200px;
      width: 100%;
    }
  };
  }

</style>
