<template>
  <div class="goods-info">
    <!--半场动画-构造函数-->
    <transition
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter">
      <div class="ball" v-show="ballFlag"></div>
    </transition>
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <!--轮播图区域-->
          <swiper :lunbolist="lunbolist" :isfull="false"></swiper>
        </div>
      </div>
    </div>
    <div class="mui-card">
      <div class="mui-card-header">小米8 全面屏游戏智能手机</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p class="price">
            市场价：<del>￥2999.00</del>&nbsp;&nbsp;销售价：<span class="now">￥{{price}}</span>
          </p>
          <p>
            购买数量：
            <numberbox ref="numbox" :max="maxCount"></numberbox>
          </p>
          <p>
            <mt-button type="primary" size="small">立即购买</mt-button>
            <mt-button type="danger" size="small" @click="addCart()">加入购物车</mt-button>
          </p>
        </div>
      </div>
    </div>
    <div class="mui-card">
      <div class="mui-card-header">商品参数</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p>商品编号：7437788</p>
          <p>库存情况：{{maxCount}}件</p>
          <p>上架时间：2018-09-13 14:33:02</p>
        </div>
      </div>
      <div class="mui-card-footer">
        <mt-button type="primary" size="large" plain @click="toDesc(1)">图文介绍</mt-button>
        <mt-button type="danger" size="large" plain @click="toComment(1)">商品评论</mt-button>
      </div>
    </div>

  </div>
</template>

<script>
  import swiper from '../sub/Swiper'
  import { Toast } from 'mint-ui'
  import numberbox from '../sub/GoodsInfoNumberBox'

  export default {
    name: "goods-info",
    data(){
      return{
        lunbolist:[],
        ballFlag: false, //控制小球显示和隐藏
        maxCount: 60, // 库存最大值
        id: this.$route.params.id,
        price: '2899.00'
      }
    },
    created(){
      this.getData();
    },
    methods:{
      getData() {
        this.$http.get("random/data/%E7%A6%8F%E5%88%A9/5").then(response => {
          if (!response.body.error) {
            this.lunbolist = response.body.results
          } else {
            Toast('加载轮播图失败……')
          }
        }).catch(error => {
          console.log(error)
        })
      },
      toDesc(id){
        this.$router.push({name: 'goodsdesc',params:{id}})
      },
      toComment(id){
        this.$router.push({name: 'goodscomment',params:{id}})
      },
      addCart(){
        //添加到购物车
        this.ballFlag = !this.ballFlag;
        console.log(this.$refs.numbox.getVal())

        // {id: 商品id, count: 购买数量, price: 商品单价, selected: false 是否被选中}
        var goodsinfo = {
          id: this.id,
          count: this.$refs.numbox.getVal(),
          price: this.price,
          selected: true
        }
        this.$store.commit('addToCart', goodsinfo)
        console.log(this.$store.state.cart)
      },
      beforeEnter(el){
        //此处设置小球起始样式
        el.style.transform = "translate(0px,0px)"
      },
      enter(el,done){
        el.offsetWidth; //强制刷新动画
        el.style.transform = "translate(77px,227px)";
        el.style.transition = "all 1s ease";
        done()  //done 是对afterEnter()的调用
      },
      afterEnter(el){
        //动画完成之后调用此方法
        //取非直接跳过后半场动画
        this.ballFlag = !this.ballFlag;
      },
    },
    components:{
      swiper,
      numberbox
    },


  }
</script>

<style lang="scss" scoped>
  .goods-info{
    position: relative;
    .ball{
      width: 15px;
      height: 15px;
      border-radius: 50%;
      background-color: red;
      z-index: 99;
      position: absolute;
      top: 340px;
      left: 151px;
    }

    .price{

      .now{
        color: red;
      }
    }
    .mui-card-footer{
      display: block;
      button{
        margin: 15px 0;
      }
    }
  }

</style>
