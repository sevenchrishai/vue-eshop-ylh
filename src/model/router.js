import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import HomeContainer from '../components/tabbar/HomeContainer'
import MemberContainer from '../components/tabbar/MemberContainer'
import ShopcarContainer from '../components/tabbar/ShopcarContainer'
import SearchContainer from '../components/tabbar/SearchContainer'

const routes=[
  {path: '/', redirect: '/home'},
  { path: '/home', component: HomeContainer },
  { path: '/member', component: MemberContainer },
  { path: '/shopcar', component: ShopcarContainer },
  { path: '/search', component: SearchContainer },

]

const router = new VueRouter({
  routes,
  linkActiveClass: 'mui-active' //覆盖默认的路由高亮的类，默认的类叫 router-link-active
})

export default router
