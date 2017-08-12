<!--Created by fjl on 2017/7/13-->
<!--掌上组织生活-->
<template>
  <div class="palmOrganization">
    <div class="scroll-content has-header">

      <div>
        <img :src="imageUrl"
             alt="" class="img-style">
      </div>
      <!--多列布局-->
      <much-col-layout :data="muchColData" @clickItem="goMuchColContent"></much-col-layout>
    </div>

  </div>
</template>

<script>
  import muchColData from '../../appConfig/organization'
  import MuchColLayout from '../../components/common/muchColLayout/MuchColLayout'
  import banner from '../../assets/img/homePage/section1/orgnization/banner1.png'
  export default {
    name: 'organization',
    components: { MuchColLayout },
    data () {
      return {
        title: '',
        muchColData: muchColData,
        imageUrl: banner
      }
    },
    activated () {
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
  .palmOrganization{
    .img-style{
      width:100%;
      height: 200px;
    }
  }
</style>
