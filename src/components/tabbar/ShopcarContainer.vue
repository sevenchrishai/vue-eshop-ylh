<template>
  <div class="shopcar-container">
    <!--商品列表区域-->
    <ul>
      <li v-for="(item,i) in cartList" :key="item.id">
        <div class="mui-card">
          <div class="mui-card-content">
            <div class="mui-card-content-inner">
              <mt-switch v-model="$store.getters.getGoodsSelected[item.id]" @change="selectedChange(item.id)"></mt-switch>
              <img src="https://img13.360buyimg.com/n7/jfs/t19912/33/927199229/297549/8c269ff0/5b0fca0fN8d5600df.jpg" alt="">
              <div class="info">
                <h1>小米8 全面屏游戏智能手机</h1>
                <p>
                  <span class="price">￥{{item.price}}</span>
                  <numberbox :initCount="$store.getters.getGoodsCount[item.id]" :goodsid="item.id"></numberbox>
                  <span class="del" @click="del(item.id, i)">删除</span>
                </p>
              </div>
            </div>
          </div>
        </div>

      </li>
    </ul>
    <!--结算区域-->
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner submit">
          <div>
            <p>总计（不含运费）</p>
            <p>已勾选商品<span class="red">{{$store.getters.getAllSelectedGoodsCountAndPrice.count}}</span>件，
              总价 <span class="red">￥{{$store.getters.getAllSelectedGoodsCountAndPrice.price}}</span> </p>
          </div>
          <mt-button type="danger" size="small">去结算</mt-button>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
  import numberbox from '../sub/ShopCartNumberBox'
  import storage from '../../model/storage'
  export default {
    name: "shopcar-container",
    data() {
      return {
        value: true,
        cartList: []
      }
    },
    created(){
      this.getData()
    },
    methods:{
      getData(){
        this.cartList = storage.get('cart')
      },
      del(id, i){
        this.$store.commit('delGoods', id)
        this.cartList.splice(i, 1)
      },
      selectedChange(id){
        this.$store.commit('selectedGoods', id)
      }
    },
    components:{
      numberbox
    }
  }
</script>

<style lang="scss" scoped>
  .shopcar-container{
    background-color: #f2f2f2;
    overflow: hidden;
    ul{
      li{
        .mui-card-content-inner{
          display: flex;
          align-items: center;
          padding: 15px 5px;
          img{
            width: 60px;
            height: 60px;
          }
          .info{
            h1{
              font-size: 13px;
            }
            .price{
              color: red;
            }
            .del{
              color: cornflowerblue;
            }

          }
        }
      }
    }
    .submit{
      display: flex;
      justify-content: space-between;
      align-items: center;
      .red{
        color: red;
        font-weight: bold;
        font-size: 16px;
      }

    }

  }

</style>
