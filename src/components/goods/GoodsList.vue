<template>
  <div class="goods-list">
    <ul>
      <li>
        <img src="https://img13.360buyimg.com/n7/jfs/t19912/33/927199229/297549/8c269ff0/5b0fca0fN8d5600df.jpg" alt="小米8">
        <h1 class="title">小米8 全面屏游戏智能手机</h1>
        <div class="info">
          <p class="price">
            <span class="now">￥2899.00</span>
            <span class="old">￥2999.00</span>
          </p>
          <p class="num">
            <span class="hot">热卖中</span>
            <span class="no">剩60件</span>
          </p>
        </div>
      </li>
      <li>
        <img src="https://img14.360buyimg.com/n7/jfs/t19786/94/1948790595/190301/ad172397/5adfe50bNd5907d0b.jpg" alt="小米6">
        <h1 class="title">小米6X 全网通 4GB+64GB 赤焰红 移动联通电信4G手机 双卡双待 智能手机 拍照手机</h1>
        <div class="info">
          <p class="price">
            <span class="now">￥1349.00</span>
            <span class="old">￥1449.00</span>
          </p>
          <p class="num">
            <span class="hot">热卖中</span>
            <span class="no">剩60件</span>
          </p>
        </div>
      </li>
      <li>
        <img src="https://img13.360buyimg.com/n7/jfs/t19912/33/927199229/297549/8c269ff0/5b0fca0fN8d5600df.jpg" alt="小米8">
        <h1 class="title">小米8 全面屏游戏智能手机 6GB+64GB 黑色 全网通4G 双卡双待</h1>
        <div class="info">
          <p class="price">
            <span class="now">￥2899.00</span>
            <span class="old">￥2999.00</span>
          </p>
          <p class="num">
            <span class="hot">热卖中</span>
            <span class="no">剩60件</span>
          </p>
        </div>
      </li>
    </ul>

  </div>
</template>

<script>
  export default {
    name: "goods-list",
    data(){
      return{

      }
    }
  }
</script>

<style lang="scss" scoped>
  .goods-list{
    ul{
      display: flex;
      flex-wrap: wrap;
      padding: 7px;
      justify-content: space-between;
      li{
        width: 49%;
        border: 1px solid #cccccc;
        box-shadow: 0 0 8px #aaaaaa;
        margin: 3px 0;
        display: flex;
        //改变flex主轴的方向
        flex-direction: column; //竖直
        justify-content: space-between; //让图片和下面文字都贴边对齐
        min-height: 299px;
        img{
          width: 100%;
        }
        .title{
          font-size: 14px;
          padding: 0 5px;
          font-weight: normal;
        }
        .info{
          background-color: #f2f2f2;
          p{
            padding: 5px;
            margin: 0;
          }
          .price{
            .now{
              font-size: 16px;
              color: indianred;
              font-weight: 700;
            }
            .old{
              color: #999999;
              font-size: 12px;
              text-decoration: line-through;
              margin-left: 10px;
            }
          }
          .num{
            display: flex;
            justify-content: space-between;
            .hot{
              color: red;
            }
          }
        }

      }
    }
  }

</style>
