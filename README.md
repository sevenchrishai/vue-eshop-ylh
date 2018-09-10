# vueeshopylh

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).

## 制作首页 APP 组件
 1. Header，使用的是 Mint-UI 中的 Header 组件
 2. 底部的 Tabbar，使用的 MUI 的 Tabbar
 3. 中间区域，放置一个 router-view 来展示路由匹配到的组件

## 改造 tabbar 为 router-link，设置路由高亮样式 linkActiveClass: 'mui-active'，点击 tabbar 中的路由链接，展示对应的路由组件

## 制作首页轮播图布局
  1.使用 mint-ui 中的 Swipe 组件
  2.设置轮播图样式（高度要手动设置）
  3.使用 vue-resource 获取轮播图数据
  4.使用 v-for 循环渲染每个 item 项

## 制作首页九宫格布局
  1.使用 MUI 中的 grid-default
  2.修改样式（直接复制 mui 的类修改）

## 制作 tabbar 切换时候的动画效果，使得显示更流畅
  1.在 router-view 外层加上 transition
  2.设置动画样式 v-enter/v-leave-to(opacity: 0;transform: translateX(100%))
  3.v-enter-active/v-leave-active(transition: all 0.5s ease)
  4.注意几点：#app{overflow-x: hidden;}、.v-leave-to{transform: translateX(-100%);position: absolute;}
