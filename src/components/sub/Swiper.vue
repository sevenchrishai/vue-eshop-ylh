<template>
  <div>
    <mt-swipe :auto="3000">
      <!--此时，lunbolist 应该是父组件向子组件传递过来的值来设置-->
      <mt-swipe-item v-for="(item,i) in lunbolist" :key="item._id">
        <img :src="item.url" alt="" align="middle" :class="{full: isfull}">
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
  export default {
    name: "swiper",
    data() {
      return {
      }
    },
    props: ["lunbolist", "isfull"]
  }
</script>

<style lang="scss" scoped>
  .mint-swipe {
    height: 200px;
    .mint-swipe-item {
      text-align: center;
      img {
        /*width: 100%;*/
        height: 100%;
      }
    }
  }
  .full{
    width: 100%;
  }


</style>
