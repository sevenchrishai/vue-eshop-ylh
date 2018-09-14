<template>
  <div class="mui-numbox" data-numbox-min="1" style="width: 110px;height: 25px">
    <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
    <input id="test" class="mui-input-numbox" type="number" :value="initCount"
     @change="countChanged" ref="numberbox" readonly>
    <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
  </div>
</template>

<script>
  import mui from '../../lib/mui/js/mui.min'

  export default {
    name: "shop-cart-number-box",
    data(){
      return{
      }
    },
    methods:{
      getVal(){
        return mui('.mui-numbox').numbox().getValue()
      },
      countChanged(){
        console.log(this.$refs.numberbox.value)
        var goodsinfo = {
          id: this.goodsid,
          count: parseInt(this.$refs.numberbox.value),
        }
        this.$store.commit('updateCart', goodsinfo)
      }
    },
    mounted() {
      mui('.mui-numbox').numbox()
    },
    props: ['initCount', 'goodsid']
  }
</script>

<style scoped>

</style>
