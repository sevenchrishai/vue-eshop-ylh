<template>
  <div class="news-info">
    <div class="head">
      <h1>{{newsinfo.title}}</h1>
      <p>
        <span>{{newsinfo.created_at | dateFormat}}</span>
        <span>{{id}}</span>
      </p>
    </div>
    <article v-html="newsinfo.content"></article>
    <hr>
    <comment></comment>

  </div>
</template>

<script>
  import Comment from '../sub/Comment'

  export default {
    name: "news-info",
    data() {
      return {
        id: this.$route.params.id,
        newsinfo: {},
      }
    },
    methods: {
      getData() {
        this.$http.get("xiandu/data/id/" + this.id + "/count/1/page/1").then(response => {
          if (!response.body.error) {
            this.newsinfo = response.body.results[0]
          } else {
            Toast("数据加载失败……")
          }
        }).catch(error => {
          console.log(error)
        })
      }
    },
    created() {
      this.getData();
    },
    components: {
      'comment': Comment
    }
  }
</script>

<style lang="scss">
  .news-info {
    .head {
      position: relative;
      h1 {
        font-size: 14px;
        padding: 10px;
        border-bottom: 1px solid #f2f2f2;
      }
      p {
        display: flex;
        justify-content: space-between;
        padding: 0 10px;
      }
    }
    article {
      padding: 0 10px;
    }
    img {
      width: 100%;
    }
  }
</style>
