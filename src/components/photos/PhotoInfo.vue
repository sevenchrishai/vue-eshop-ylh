<template>
  <div class="photo-info">
    <div class="head">
      <h1>{{photoInfo.title}}</h1>

      <vue-preview :slides="lunbolist" @close="handleClose"></vue-preview>

      <p>
        <span>{{photoInfo.created_at | dateFormat}}</span>
        <span>{{id}}</span>
      </p>
    </div>
    <article v-html="photoInfo.content"></article>
    <hr>
    <comment></comment>
  </div>
</template>

<script>
  import Comment from '../sub/Comment'

  export default {
    name: "photo-info",
    data() {
      return {
        id: this.$route.params.id,
        index: this.$route.params.i,
        photoInfo: {},
        lunbolist: [],
        slide1: [
          {
            src: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_b.jpg',
            msrc: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_m.jpg',
            alt: 'picture1',
            title: 'Image Caption 1',
            w: 600,
            h: 400
          },
        ]

      }
    },
    created() {
      this.getData();
      this.getPicList(this.id);
    },
    methods: {
      getPicList(id) {
        this.$http.get("xiandu/data/id/" + id + "/count/10/page/1").then(response => {
          if (!response.body.error) {
            this.photoInfo = response.body.results[this.index];
          }
        })
      },
      getData() {
        this.$http.get("random/data/%E7%A6%8F%E5%88%A9/5").then(response => {
          if (!response.body.error) {
            response.body.results.forEach(item => {
              //循环每个图片数据，补全图片宽和高
              item.w = 360;
              item.h = 540;
              item.src = item.url;
              item.msrc = item.url;
            })
            this.lunbolist = response.body.results
          }
        }).catch(error => {
          console.log(error)
        })
      },
      handleClose () {
        // console.log('close event')
      }
    },
    components: {
      'comment': Comment
    }
  }
</script>

<style lang="scss">
  .photo-info {
    .head {
      position: relative;
      h1 {
        font-size: 18px;
        padding: 10px;
        margin: 10px;
        text-align: center;
        border-bottom: 1px solid #f2f2f2;
        color: darkslateblue;
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
