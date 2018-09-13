import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    // 当成是组件中的 data，专门来存储数据
    // 通过 this.$store.state.count 访问
    count: 0,
    // 将购物车的数据用一个数组存储起来，
    // {id: 商品id, count: 购买数量, price: 商品单价, selected: false 是否被选中}
    cart: []
  },
  mutations: {
    // 注意：如果要操作store中的state值，只能通过调用mutations提供的方法，才能操作
    // 注意：如果组件想要调用mutations中的方法，只能使用this.$store.commit('方法名')
    // 这种调用 mutations 方法的格式，和this.$emit('父组件方法名')类似
    getCount(state, count){
      state.count = count;
    },
    addToCart(state, goodsinfo){
      // 1. 如果购物车中有之前对应的商品，那么，只需要更新数量即可
      // 2. 如果没有，则直接把商品数据，push到cart中

      // 假设 在购物车中，没有找到对应的商品，设置flag为false
      var flag = false
      state.cart.some(item =>{
        if (item.id == goodsinfo.id) {
          item.count += parseInt(goodsinfo.count)
          flag = true //找到了，设置为true
          return true
        }
      })
      //  如果最终循环完毕，得到的flag还是false，则把商品数据直接push到数组中
      if (!flag){
        state.cart.push(goodsinfo)
      }
    }
  },
  getters:{
    getAllCount(state){
      var c = 0
      state.cart.forEach(item =>{
        c+= item.count
      })
      return c
    }
  }
})

export default store
