<template>
  <div class="viwe_pager">
    <swipe class="my-swipe" :speed="option.speed" :auto="option.auto" :showIndicators="option.showIndicators"
           :continuous="option.continuous" :noDragWhenSingle="option.noDragWhenSingle"
           :prevent="option.prevent">
      <swipe-item class="slide" v-for="item in data">
        <div class="viwepager_pic"  :style="{backgroundImage:'url('+item.pic+')'}" @click="clickPic(item.newsId)" ></div>
        <div class="img_statement"  v-text="item.title"></div>
      </swipe-item>

    </swipe>
  </div>
</template>

<script>
  import 'vue-swipe/dist/vue-swipe.css'
  import { Swipe, SwipeItem } from 'vue-swipe'
  export default{
    props: ['data'],
    name: 'viwe-pager',
    components: {
      'swipe': Swipe,
      'swipe-item': SwipeItem
    },
    data () {
      return {
        option: {
          speed: 300,
          auto: 3000,
          continuous: true,
          showIndicators: true,
          noDragWhenSingle: true,
          prevent: false
        }
      }
    },
    methods: {
      clickPic (newsId) {
        this.$emit('clickPic', newsId)
//          this.$router.push('/newsDetailPage/'+2+'/'+this.detailTitle+'/'+newsId);
      }
    }
  }

</script>

<style scoped>
  .my-swipe {
    height: 200px;
    position: relative;
  }

  .my-swipe .slide{
    height: 200px;
  }

  .viwepager_pic{
    width: 100%;
    height: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }

  .img_statement{
    z-index: 0;
    position: absolute;
    background-color: rgba(0,0,0,0.5);
    left: 0;
    bottom: 0px;
    width: 100%;
    padding: 4px;
    font-size: 15px;
    min-height: 20px;
    color: white;
    text-align: left;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
</style>
