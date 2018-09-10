import Vue from 'vue'
import App from './App.vue'

// 导入路由配置
import router from './model/router'

// 按需导入 mint-UI 中的组件
import { Header, Swipe, SwipeItem } from 'mint-ui'
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)

// 导入 vue-source 请求数据
import VueResource from 'vue-resource'
Vue.use(VueResource)

// 导入 MUI 的样式
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
