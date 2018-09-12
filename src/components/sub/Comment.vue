<template>
  <div class="comment">
    <h3>发表评论</h3>
    <hr>
    <textarea placeholder="请输入内容" maxlength="120" v-model="commentInfo"></textarea>
    <mt-button type="primary" size="large" @click="sendComment">发表评论</mt-button>
    <ul class="mui-table-view" v-for="item in list" :key="item._id">
      <li class="mui-table-view-cell">
        <div class="mui-media-body">
          <h4>{{item.content}}</h4>
          <p class="mui-ellipsis">
            <span>time：{{item.time | dateFormat}}</span>
            <span>from：{{item.user}}</span>
          </p>
        </div>
      </li>
    </ul>
    <mt-button type="danger" size="large" plain @click="getMore">加载更多</mt-button>
  </div>
</template>

<script>
  import { Toast } from 'mint-ui'
  export default {
    name: "comment",
    data() {
      return {
        commentInfo: '',
        list: [
          {"_id": Math.random(), "user": "chris", "time": new Date(), "content": "感觉还不错~~"},
          {"_id": Math.random(), "user": "seven", "time": new Date(), "content": "切"},
          {"_id": Math.random(), "user": "牛牛", "time": new Date(), "content": "我信了你的邪！"},
        ]
      }
    },
    methods: {
      sendComment(){
        if (this.commentInfo.trim() == ""){
          Toast("请输入内容")
          return;
        }
        var obj = {"_id": Math.random(), "user": "新人用户", "time": new Date(), "content": this.commentInfo}
        this.list.unshift(obj)
        this.commentInfo = ""
      },
      getMore(){
        var l = [
          {"_id": Math.random(), "user": "克里斯", "time": new Date(), "content": "我只是假数据……溜了溜了~~"},
          {"_id": Math.random(), "user": "林小瑶", "time": new Date(), "content": "阿嚏！"},
          {"_id": Math.random(), "user": "Niuniu", "time": new Date(), "content": "你是魔鬼吗？"}
        ]
        this.list = this.list.concat(l)
      }

    },


  }
</script>

<style lang="scss" scoped>
  .comment {
    padding: 0 10px;
    margin: 10px 0;
    h3 {
      font-size: 14px;
      color: lightcoral;
    }
    h4 {
      font-size: 13px;
      font-weight: normal;
    }
    .mui-ellipsis {
      display: flex;
      justify-content: space-between;
    }

  }

</style>
