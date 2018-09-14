import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import storage from '../model/storage'

// 每次刚进入网站，肯定会调用 main.js ，而store已经挂载到main中，
// 在刚调用的时候，先从本地存储中，把购物车的数据读出来，放在 state中
var cart = storage.get('cart');

const store = new Vuex.Store({
  state: {
    // 当成是组件中的 data，专门来存储数据
    // 通过 this.$store.state.count 访问
    count: 0,
    // 将购物车的数据用一个数组存储起来，
    // {id: 商品id, count: 购买数量, price: 商品单价, selected: false 是否被选中}
    cart: cart
  },
  mutations: {
    // 注意：如果要操作store中的state值，只能通过调用mutations提供的方法，才能操作
    // 注意：如果组件想要调用mutations中的方法，只能使用this.$store.commit('方法名')
    // 这种调用 mutations 方法的格式，和this.$emit('父组件方法名')类似
    getCount(state, count){
      state.count = count;
    },
    addToCart(state, goodsinfo){  //加入购物车触发的方法
      // 1. 如果购物车中有之前对应的商品，那么，只需要更新数量即可
      // 2. 如果没有，则直接把商品数据，push到cart中
      // 假设 在购物车中，没有找到对应的商品
      var flag = false
      state.cart.some(item =>{  // some - 找到符合条件的了就停止了
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
      // 当更新cart之后，把cart数组存储到本地的localstorage中
      storage.set("cart",state.cart)
    },
    updateCart(state, goodsinfo){ //购物车页面修改商品数量触发的方法
      state.cart.some(item =>{
        if (item.id == goodsinfo.id){
          item.count = goodsinfo.count
          return true
        }
      })
      // 当修改完商品的数量，把最新的购物车数据，保存到本地存储中
      storage.set("cart",state.cart)
    },
    delGoods(state, id){ //购物车删除商品触发的方法
      state.cart.some((item,index,arr) =>{
        if (item.id == id){
          arr.splice(index, 1);
          return true
        }
      })
      // 当更新cart之后，把cart数组存储到本地的localstorage中
      storage.set("cart",state.cart)
    },
    selectedGoods(state, id){ //switch 按钮触发此方法
      state.cart.some((item) =>{
        if (item.id == id){
          item.selected = !item.selected
          return true
        }
      })
      // 当更新cart之后，把cart数组存储到本地的localstorage中
      storage.set("cart",state.cart)
    }
  },
  getters:{
    getAllCount(state){
      var c = 0
      state.cart.forEach(item =>{
        c+= parseInt(item.count)
      })
      return c
    },
    getGoodsCount(state){
      // 创建一个 id: count 键值对组成的对象，这样我们就可以通过id获取每个商品的购买的数量
      var o = {}
      state.cart.forEach(item=>{
        o[item.id] = item.count
      })
      return o;
    },
    getGoodsSelected(state){
      // 创建一个 id: boolean 键值对组成的对象，这样我们就可以通过id获取每个商品是否被选中
      var o = {}
      state.cart.forEach(item=>{
        o[item.id] = item.selected
      })
      return o;
    },
    getAllSelectedGoodsCountAndPrice(state){
      var o = {
        count: 0, // 勾选的数量
        price: 0  // 勾选的总价
      }
      state.cart.forEach(item =>{
        if (item.selected){
          o.count += parseInt(item.count);
          o.price += parseFloat(parseInt(item.count) * parseFloat(item.price))
        }
      })
      return o
    },
  }
})

export default store
