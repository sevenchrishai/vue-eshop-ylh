<template>
  <div>
    <!--轮播图区域-->
    <mt-swipe :auto="3000">
      <mt-swipe-item v-for="(item,i) in lunbolist" :key="item._id">
        <img :src="item.url" alt="" align="middle">
      </mt-swipe-item>
    </mt-swipe>
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
        <img src="../../assets/icon_news.png" alt="">
        <div class="mui-media-body">新闻资讯</div></a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
        <img src="../../assets/icon_img.png" alt="">
        <div class="mui-media-body">图片分享</div></a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
        <img src="../../assets/icon_shop.png" alt="">
        <div class="mui-media-body">商品购买</div></a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
        <img src="../../assets/icon_msg.png" alt="">
        <div class="mui-media-body">留言反馈</div></a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
        <img src="../../assets/icon_video.png" alt="">
        <div class="mui-media-body">视频专区</div></a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
        <img src="../../assets/icon_contact.png" alt="">
        <div class="mui-media-body">联系我们</div></a></li>
    </ul>
  </div>
</template>

<script>
  import { Toast } from 'mint-ui'

  export default {
    name: "home-container",
    data() {
      return {
        msg: "msg",
        lunbolist: []
      }
    },
    methods: {
      getData(){
        const url = "https://gank.io/api/data/%E7%A6%8F%E5%88%A9/5/1";
        this.$http.get(url).then(response => {
          if (!response.body.error){
            this.lunbolist = response.body.results
          } else {
            Toast('加载轮播图失败……')
          }
        }).catch(error => {
          console.log(error)
        })
      }
    },
    created(){
      this.getData();
    }
  }
</script>

<style lang="scss" scoped>
  .mint-swipe {
    height: 200px;
    .mint-swipe-item {
      &:nth-child(1) {
        background-color: lightcoral;
      }
      &:nth-child(2) {
        background-color: darkcyan;
      }
      &:nth-child(3) {
        background-color: gold;
      }
      &:nth-child(4) {
        background-color: darkorange;
      }
      &:nth-child(5) {
        background-color: darkgray;
      }
      img{
        width: 100%;
        position: absolute;
        top: -30%;
        left: 0;
      }
    }
  }
  .mui-grid-view.mui-grid-9{
    background-color: white;
    border: none;
    img{
      width: 64px;
    }
    .mui-media-body{
      font-size: 13px;
    }
  }
  .mui-grid-view.mui-grid-9 .mui-table-view-cell{
    border: none;
  }

</style>
