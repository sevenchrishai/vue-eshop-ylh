import Vue from 'vue'
import App from './App.vue'

//按需导入 mint-UI 中的组件
import { Header } from 'mint-ui'
Vue.component(Header.name, Header)

//导入 MUI 的样式
import './lib/mui/css/mui.min.css'

new Vue({
  el: '#app',
  render: h => h(App)
})
