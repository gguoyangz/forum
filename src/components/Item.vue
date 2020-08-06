<template>
  <div class="item">
    <div class="left">
      <img src="../assets/images/careertu.png" alt="">
    </div>
    <div class="right">
      <div class="div-info">
        <div class="user">{{obj.userName}}</div>
        <div class="release-time">
          <div class="date">{{obj.date}}</div>
          <div class="time">{{obj.time}}</div>
          <div class="tag">#{{obj.tag}}</div>
        </div>
      </div>
      <div class="div-title">
        <div class="title-top" v-if="obj.isTop">置顶</div>
        <div class="title-content">{{obj.title}}</div>
      </div>
      <div class="div-content" ref="contentBody">
        <span :class="{'hidden-text': showAllBtn}">{{obj.content}}</span>
        <a class="read-all" v-show="showAllBtn" @click="extendContent">阅读全文</a>
      </div>
      <div class="fun-btn">
        <div class="anwser">
          <div class="anwser-icon">
            <img src="../assets/images/edit-reply.png" alt="">
          </div>
          <div class="anwser-text">回答</div>
        </div>
        <div class="comment">
          <div class="comment-icon">
            <img src="../assets/images/comment.png" alt="">
          </div>
          <div class="comment-text" @click="viewComment">{{commentStatus ? "收起评论" : "添加评论"}}<span> {{obj.comment.commentNum || 0}}</span></div>
        </div>
        <div class="good">
          <div class="good-icon">
            <img src="../assets/images/good-gray.png" alt="" v-show="!isGood" @click="pressGood">
            <img src="../assets/images/good-red.png" alt="" v-show="isGood" @click="pressNoGood">
          </div>
          <div class="good-text">{{obj.goodNum}}</div>
        </div>
      </div>
      <edit class="edit-com" :obj="obj" v-if="commentStatus"></edit>
    </div>
  </div>
</template>

<script>
import Edit from '@/components/Edit.vue'
export default {
  name: 'Item',
  components: {
    Edit
  },
  props: {
    obj: Object
  },
  data () {
    return {
      showAllBtn: false, // “阅读全文”按钮显示状态
      defaultHeight: 30, // 默认最大显示高度px
      commentStatus: false, // 评论展开状态
      isGood: false // 是否点赞
    }
  },
  mounted () {
    setTimeout(() => {
      this.contentTrigge()
    }, 500)
  },
  methods: {
    contentTrigge () {
      if (this.$refs.contentBody.offsetHeight > this.defaultHeight) this.showAllBtn = true // 当文字高度超过默认内容限制高度，显示“阅读全文”按钮
    },
    // 点击阅读全文
    extendContent () {
      this.showAllBtn = false
    },
    pressGood () {
      this.obj.goodNum++
      this.isGood = true
    },
    pressNoGood () {
      this.obj.goodNum--
      this.isGood = false
    },
    // 查看关闭评论
    viewComment () {
      this.commentStatus = !this.commentStatus
    }
  }
}
</script>
<style scoped>
.item{
  padding-top: 20px;
  padding-bottom: 16px;
  border-bottom: 1px solid rgba(239, 239, 239);
}
.item .left{
  width: 60px;
  height: 100%;
  float: left;
}
.item .left img{
  width: 20px;
  height: 20px;
}
.item .right{
  overflow: hidden;
  padding-right: 8%;
}
/* .item .right .edit-com{
  max-width: 90%;
} */
.item .right .div-info{
  display: flex;
}
.item .right .div-info .release-time{
  color: rgba(217, 217, 217);
  display: flex;
  margin-left: 10px;
}
.item .right .div-info .release-time div{
  margin-left: 10px;
}
.item .right .div-title{
  display: flex;
  align-items: center;
  margin-top: 16px;
}
.item .right .div-title .title-top{
  color: white;
  background-color: rgba(248, 57, 54);
  width: 48px;
  height: 20px;
  line-height: 20px;
  border-radius: 5px;
  font-weight: bold;
  font-size: 12px;
  margin-right: 10px;
}
.item .right .div-title .title-content{
  font-weight: bold;
}
.item .right .div-content{
  margin-top: 10px;
  text-align: left;
  text-overflow: ellipsis;
  position: relative;
}
.hidden-text{
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
}
.item .right .div-content .read-all{
  color: rgba(98, 189, 207);
  position: absolute;
  top: 30px;
  background-color: white;
  left: 48px;
  width: 100%;
}
.item .right .div-content .read-all::before{
  content: "...";
  color: black;
  margin-right: 10px;
}
.read-all:hover{
  cursor: pointer;
}
.item .right .fun-btn{
  display: flex;
  margin-top: 10px;
}
.item .right .fun-btn .anwser{
  display: flex;
  align-items: center;
  margin-right: 14px;
  cursor: pointer;
}
.item .right .fun-btn .anwser .anwser-icon{
  width: 16px;
  height: 16px;
  margin-right: 6px;
}
.item .right .fun-btn .anwser img{
  width: 100%;
  height: 100%;
}

.item .right .fun-btn .comment{
  display: flex;
  align-items: center;
  margin-right: 14px;
  cursor: pointer;
}
.item .right .fun-btn .comment .comment-icon{
  width: 16px;
  height: 16px;
  margin-right: 6px;
}
.item .right .fun-btn .comment img{
  width: 100%;
  height: 100%;
}

.item .right .fun-btn .good{
  display: flex;
  align-items: center;
  margin-right: 14px;
  cursor: pointer;
}
.item .right .fun-btn .good .good-icon{
  width: 16px;
  height: 16px;
  margin-right: 6px;
}
.item .right .fun-btn .good img{
  width: 100%;
  height: 100%;
}
</style>
