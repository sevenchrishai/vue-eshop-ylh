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

## 所有API来自干货集中营（https://gank.io/api）

## 制作首页 APP 组件
 1. Header，使用的是 Mint-UI 中的 Header 组件
 2. 底部的 Tabbar，使用的 MUI 的 Tabbar
 3. 中间区域，放置一个 router-view 来展示路由匹配到的组件

## 改造 tabbar 为 router-link
 1. 设置路由高亮样式 linkActiveClass: 'mui-active'，点击 tabbar 中的路由链接，展示对应的路由组件

## 制作首页轮播图布局
 1. 使用 mint-ui 中的 Swipe 组件
 2. 设置轮播图样式（高度要手动设置）
 3. 使用 vue-resource 获取轮播图数据
 4. 使用 v-for 循环渲染每个 item 项

## 制作首页九宫格布局
 1. 使用 MUI 中的 grid-default
 2. 修改样式（直接复制 mui 的类修改）

## 制作 tabbar 切换时候的动画效果，使得显示更流畅
 1. 在 router-view 外层加上 transition
 2. 设置动画样式 v-enter/v-leave-to(opacity: 0;transform: translateX(100%))
 3. v-enter-active/v-leave-active(transition: all 0.5s ease)
 4. 注意几点：#app{overflow-x: hidden;}、.v-leave-to{transform: translateX(-100%);position: absolute;}

## 制作新闻资讯页面
 1. 改造新闻资讯路由链接
 2. 绘制界面 - 使用 mui 的 media-list
 3. 使用 vue-resource 获取数据 (* Vue.http.options.root 设置请求的根路径)
 4. 渲染真实数据(时间格式化处理-定义全局过滤器-这里导入了时间格式化的第三方插件 moment.js)

## 制作新闻详情见面
 1. 改造新闻详情路由链接（通过列表id点击进入,使用动态路由：【:to="'/home/newslist/' + item.id"】）
 2. 在详情页面通过 this.$route.params.id 获取传过来的id

## 制作评论子组件
 1. 在父组件中，使用 components 属性，将导入的 comment 组件，注册为子组件
 2. 以标签形式，在页面中引用
 3. 涉及到父子组件传值（父组件调用子组件标签添加绑定属性--子组件props数组接收处理传过来的值）
 4. 加载更多功能，点击让 pageIndex++，再调用API（注意使用 contact 拼接数组）
 5. 发表评论
  + 把文本框做双向数据绑定
  + 为发表按钮绑定一个事件
  + 校验评论内容是否为空，如果为空，Toast 提示用户评论不能为空（引入：import { Toast } from 'mint-ui'）
  + 通过 vue-resource 发送一个请求，把评论内容提交给服务器
  + 当发表评论成功后，重新刷新列表，以查看最新的评论，但是：
  - 如果调用 getComments 方法重新刷新评论列表的话，可能只能得到最后一页的评论，前几页的评论获取不到
  - 换一种思路：当评论成功后，在客户端，手动拼接出一个最新的评论对象，然后调用数组的 unshift 方法，把最新的评论追加到 data 中

## 制作图片分享页面
 1. 顶部滑动条
  + 使用 mui 中的 tab-top-webview-main（可左右拖动的顶部选项卡）
  + 需要把 slider 区域的 mui-fullscreen 类去掉
  + 滑动条无法正常滑动，通过检查官方文档，发现这是JS组件，需要被初始化（* 若使用区域滚动组件，需手动初始化scroll控件）：
  - 导入 mui.js
  - 调用官方提供的初始化方法
   ```
   mui('.mui-scroll-wrapper').scroll({
   	deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
   });
   ```
   + 踩坑：
   - strict mode 问题，使用插件 babel-plugin-transform-remove-strict-mode 移除 webpack 严格模式；
   - 因为如果要初始化滑动条，必须要等dom元素加载完毕，所以，我们把初始化滑动条的代码，搬到 mounted 生命周期函数；
   - 谷歌浏览器调试device选Galxy S5（选iPhone滑不动），样式加上：*{touch-action: pan-y}（不加这个，谷歌浏览器滑动会报错）；
   - 初始化之后底部栏 tabbar 不能切换了！！（原因：mui.js里两者定义的类冲突了；解决办法：改类名，再把之前的样式赋上去）   
   + 请求数据获取 top-tab 列表
   + 循环渲染（注意，要使页面从进入开始item第一项高亮，需绑定class：:class="['mui-control-item', i===0 ? 'mui-active': '']"）
 2. 底部图片列表（对应分类的图片列表）
  + 图片列表需要使用懒加载技术，使用 mint-ui 提供的组件 lazy-load
  + 踩坑：
  - mint-ui 按需加载，懒加载图标显示不了，使用完整引入
  - 懒加载图标是白色的，设置背景为非白，可显示出来
  - 图片列表往上滑时，顶部滑动条会覆盖header，层级原因，设置header样式z-index:99
  + 根据 lazy-load 的使用文档，尝试使用
  + 渲染图片列表数据，美化布局
  
## 制作图片详情页面
 1. 在改造 li 成 router-link 时，需要使用 tag 属性指定要渲染为哪种元素（渲染为li）
 2. 请求数据并美化布局
 3. 实现图片详情中缩略图的功能
 + 使用插件 vue-preview 这个缩略图插件
 + 获取到所有的图片列表，然后使用 v-for 指令渲染数据
 + 注意：img标签上的class不能去掉
 + 注意：每个图片数据对象中，必须有 w 和 h 属性
 
## 制作商品购买页面
 1. 改造商品购买路由链接
 2. 绘制界面（活用flex布局）
 3. 请求数据
 4. 渲染美化布局
 5. 关于商品页面都是静态数据

## 制作商品详情页面
 1. 改造商品详情路由链接（动态路由）
 2. 绘制界面（这里使用了 mui 现成的卡片视图组件 card）
 3. 将轮播图抽离出来，当作一个组件，在商品详情中引入（在轮播图组件中绑定class，使图片宽度与首页不一样--:class="{full: isfull}"）
 4. 购买数量的 - + 可使用 mui 的数字输入框组件 number box（同样，它是js组件，js组件需要初始化，按照文档进行初始化：mui(Selector).numbox()）
 5. 实现基本的加入购物车小球动画
 6. 安装 vuex 实现全局数据共享
 + 商品详情页面：购买数量->加入购物车<->底部tabbar购物车数量同步
 ```
 npm i vuex -S
 ----------------------
 import Vue from 'vue'
 import Vuex from 'vuex'
 Vue.use(Vuex)
 ```
 + v-show="$store.state.count !=0" 如果购物车数量为0，设置badge不显示
 
## 制作购物车页面
 1. 购物车数据都存储在 vuex 的state中的 cart 数组中（在详情页加入购物车时存储的）
 2. 购物车页面对数据的操作，也需要提交(commit)到 vuex中
 3. 在store中操作，将cart数据存储在本地localstorage中，并在页面第一次加载时，读取localstorage，更新购物车数据
 4. 当购物车页面页面中商品数量的加减（change事件），商品的删除以及商品的选中（change事件），都需要在 store 中操作并存储到本地
 5. 计算总计商品数量和总价时，在 store 中的 getters 中写方法获取
 6. 这部分逻辑详细见代码。

## 关于Header返回
 1. 通过 this.$route.path 判断当前页面的路由路径，当它等于 '/home' 时，返回键隐藏
 2. 页面刷新进入，也要进行判断，是否需要隐藏返回键
 
