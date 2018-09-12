<template>
  <div>
    <!--top tabbar 滑动条-->
    <div class="mui-content">
      <div id="slider" class="mui-slider">
        <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
          <div class="mui-scroll">
            <a :class="['mui-control-item', i===0 ? 'mui-active': '']" v-for="(item,i) in tabtoplist" :key="item._id"
               @click.prevent="getPicList(item.id)">
              {{item.id}}
            </a>
          </div>
        </div>
      </div>
    </div>
    <!--图片列表-->
    <ul class="pic-list">
      <router-link v-for="(item,i) in picList" :key="item._id" :to="'/home/photolist/' + id + '/' + i" tag="li">
        <img v-lazy="item.cover">
        <div class="info">{{item.title}}</div>
      </router-link>
    </ul>

  </div>
</template>

<script>
  import mui from '../../lib/mui/js/mui.min'

  export default {
    name: "photo-list",
    data(){
      return{
        tabtoplist: [],
        picList: [],
        id: ''
      }
    },
    created(){
      this.getTabTopList();
    },
    methods: {
      getTabTopList(){
        this.$http.get("xiandu/category/thinking").then(response => {
          if (!response.body.error){
            this.tabtoplist = response.body.results;
            this.getPicList(this.tabtoplist[0].id)
          }
        })
      },
      getPicList(id){
        this.$http.get("xiandu/data/id/" + id + "/count/10/page/1").then(response => {
          if (!response.body.error){
            this.picList = response.body.results;
            this.id = id;
          }
        })
      }
    },
    mounted(){
      // 当组件中的DOM结构被渲染好并放在页面中后，会执行这个钩子函数
      // scroll 初始化应在此进行（因为要操作dom元素）
      mui('.mui-scroll-wrapper').scroll({
        deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
      });

    }
  }
</script>

<style lang="scss" scoped>
  *{
    touch-action: pan-y;
  }
  .pic-list{
    padding: 10px 10px 0;
    li{
      background-color: #cccccc;
      text-align: center;
      margin-bottom: 10px;
      box-shadow: 0 0 9px #999999;
      position: relative;
      img {
        width: 100%;
        vertical-align: middle;
        border-radius: 5px;
      }
      img[lazy=loading] {
        width: 40px;
        height: 300px;
        margin: auto;
      }
      .info{
        position: absolute;
        bottom: 0;
        height: 40px;
        width: 100%;
        line-height: 40px;
        font-size: 14px;
        color: #ffffff;
        background-color: rgba(0,0,0,0.5);
      }
    }
  }

</style>
