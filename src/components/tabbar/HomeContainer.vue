<template>
  <div>
    <!--轮播图区域-->
    <swiper :lunbolist="lunbolist" :isfull="true"></swiper>
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/newslist">
          <img src="../../assets/icon_news.png" alt="">
          <div class="mui-media-body">新闻资讯</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/photolist">
          <img src="../../assets/icon_img.png" alt="">
          <div class="mui-media-body">图片分享</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/goodslist">
        <img src="../../assets/icon_shop.png" alt="">
        <div class="mui-media-body">商品购买</div>
      </router-link></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
        <img src="../../assets/icon_msg.png" alt="">
        <div class="mui-media-body">留言反馈</div>
      </a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
        <img src="../../assets/icon_video.png" alt="">
        <div class="mui-media-body">视频专区</div>
      </a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
        <img src="../../assets/icon_contact.png" alt="">
        <div class="mui-media-body">联系我们</div>
      </a></li>
    </ul>
  </div>
</template>

<script>
  import {Toast} from 'mint-ui'
  import swiper from '../sub/Swiper'

  export default {
    name: "home-container",
    data() {
      return {
        msg: "msg",
        lunbolist: [],
      }
    },
    methods: {
      getData() {
        this.$http.get("data/%E7%A6%8F%E5%88%A9/5/1").then(response => {
          if (!response.body.error) {
            this.lunbolist = response.body.results
          } else {
            Toast('加载轮播图失败……')
          }
        }).catch(error => {
          console.log(error)
        })
      }
    },
    created() {
      this.getData();
    },
    components: {
      swiper
    }
  }
</script>

<style lang="scss" scoped>
  .mui-grid-view.mui-grid-9 {
    background-color: white;
    border: none;
    img {
      width: 64px;
    }
    .mui-media-body {
      font-size: 13px;
    }
  }

  .mui-grid-view.mui-grid-9 .mui-table-view-cell {
    border: none;
  }

</style>
