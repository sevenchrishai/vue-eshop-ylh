<template>
  <div>
    <ul class="mui-table-view mui-table-view-chevron">
      <li class="mui-table-view-cell mui-media" v-for="item in newslist" :key="item._id">
        <router-link class="mui-navigate-right" :to="'/home/newslist/' + item.id">
          <img class="mui-media-object mui-pull-left" :src="item.icon">
          <div class="mui-media-body">
            <h1>{{item.title}}</h1>
            <p class="mui-ellipsis">
              <span>time：{{item.created_at | dateFormat}}</span>
              <span>from：{{item.id}}</span>
            </p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  import { Toast } from 'mint-ui'
  export default {
    name: "news-list",
    data() {
      return{
        newslist: []
      }
    },
    methods: {
      getData(){
        this.$http.get("xiandu/category/apps").then(response => {
          if (!response.body.error) {
            this.newslist = response.body.results
          } else {
            Toast("数据加载失败……")
          }
        }).catch(error => {
          console.log(error)
        })
      }
    },
    created(){
      this.getData();
    }

  }
</script>

<style lang="scss" scoped>
  .mui-media-body {
    h1 {
      font-size: 14px;
    }
    p {
      display: flex;
      justify-content: space-between;
      align-content: center;
      font-size: 12px;
      color: darkcyan;
    }
  }

</style>
