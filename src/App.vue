<template>
  <div id="app">
    <!--顶部-->
    <mt-header fixed title="seven">
      <a slot="left" @click.prevent="back()">
        <mt-button icon="back"></mt-button>
      </a>
    </mt-header>
    <!--中间的 路由 router-view 区域-->
    <transition>
      <router-view></router-view>
    </transition>

    <!--底部 Tabbar 区域-->
    <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item-1" to="/home">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item-1" to="/member">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">会员</span>
      </router-link>
      <router-link class="mui-tab-item-1" to="/shopcar">
        <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
          <!--<span :class="['mui-badge', $store.state.count ===0 ? 'full' : '']">{{$store.state.count}}</span>-->
          <span class="mui-badge" v-show="$store.getters.getAllCount !=0">{{$store.getters.getAllCount}}</span>
        </span>
        <span class="mui-tab-label">购物车</span>
      </router-link>
      <router-link class="mui-tab-item-1" to="/search">
        <span class="mui-icon mui-icon-search"></span>
        <span class="mui-tab-label">搜索</span>
      </router-link>
    </nav>

  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    methods:{
      back(){
        if (this.$router.history.current.path != '/home'){
          this.$router.go(-1)
        }
      }
    },
  }
</script>

<style lang="scss">
  #app {
    margin: 40px 0 50px;
    overflow-x: hidden;
    .full{
      display: none;
    }
  }
  .mint-header.is-fixed{
    z-index: 99;
  }
  .mint-header-title{
    font-size: 18px;
  }
  ul{
    margin: 0;
    padding: 0;
  }
  li{
    list-style: none;
  }

  .mui-bar-tab .mui-tab-item-1.mui-active {
    color: #007aff;
  }
  .mui-bar-tab .mui-tab-item-1 {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
  }
  .mui-bar-tab .mui-tab-item-1 .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
  }
  .mui-bar-tab .mui-tab-item-1 .mui-icon~.mui-tab-label {
    font-size: 11px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .v-enter {
    opacity: 0;
    transform: translateX(100%);
  }
  .v-leave-to{
    opacity: 0;
    transform: translateX(-100%);
    position: absolute;
  }

  .v-enter-active, .v-leave-active {
    transition: all 0.5s ease;
  }
</style>
