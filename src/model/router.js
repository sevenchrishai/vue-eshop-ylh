import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import HomeContainer from '../components/tabbar/HomeContainer'
import MemberContainer from '../components/tabbar/MemberContainer'
import ShopcarContainer from '../components/tabbar/ShopcarContainer'
import SearchContainer from '../components/tabbar/SearchContainer'
import NewsList from '../components/news/NewsList'
import NewsInfo from '../components/news/NewsInfo'
import PhotoList from '../components/photos/PhotoList'
import PhotoInfo from '../components/photos/PhotoInfo'
import GoodsList from '../components/goods/GoodsList'

const routes=[
  {path: '/', redirect: '/home'},
  { path: '/home', component: HomeContainer },
  { path: '/member', component: MemberContainer },
  { path: '/shopcar', component: ShopcarContainer },
  { path: '/search', component: SearchContainer },
  { path: '/home/newslist', component: NewsList},
  { path: '/home/newslist/:id', component: NewsInfo},
  { path: '/home/photolist', component: PhotoList},
  { path: '/home/photolist/:id/:i', component: PhotoInfo},
  { path: '/home/goodslist', component: GoodsList},
]

const router = new VueRouter({
  routes,
  linkActiveClass: 'mui-active' //覆盖默认的路由高亮的类，默认的类叫 router-link-active
})

export default router
