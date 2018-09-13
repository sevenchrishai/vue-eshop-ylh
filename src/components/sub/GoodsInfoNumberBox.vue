<template>
  <div class="mui-numbox" data-numbox-min="1" :data-numbox-max="max">
    <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
    <input id="test" class="mui-input-numbox" type="number" value="1">
    <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
  </div>
</template>

<script>
  import mui from '../../lib/mui/js/mui.min'

  export default {
    name: "goods-info-number-box",
    data(){
      return{
      }
    },
    methods:{
      getVal(){
        return mui('.mui-numbox').numbox().getValue()
      }
    },
    mounted() {
      mui('.mui-numbox').numbox()
    },
    props: ["max"],
    watch: {
      'max': function (newVal, oldVal) {
        mui('.mui-numbox').numbox().setOption('max',newVal)
      }
    }

  }
</script>

<style scoped>

</style>
