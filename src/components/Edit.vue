<template>
  <div class="edit">
      <div class="div-input">
          <input class="input" type="text">
          <div class="btn-send">发布</div>
      </div>
      <div class="div-content" v-for="item in resultArr[pageIndex]" :key="item.id">
          <div class="content-top">
              <div class="title">{{item.userName}}:</div>
              <div class="date-time">
                  <span class="date">{{item.date}}</span>
                  <span class="time">{{item.time}}</span>
              </div>
          </div>
          <div class="content-bottom">{{item.content}}</div>
      </div>

      <div class="div-page">
        <page class="page" :templePage="pageIndex" @goToPage="changePage"></page>
      </div>
  </div>
</template>

<script>
import Page from '@/components/Page.vue'
export default {
  name: 'Edit',
  components: {
    Page
  },
  props: {
    obj: Object
  },
  data () {
    return {
      commentArr: [], // 接口获取评论数据
      resultArr: [], // 最终展示所用数据
      pageIndex: 0, // 当前下标
      pageNum: 0 // 总页数
    }
  },
  mounted () {
    this.commentArr = this.obj.comment.commentDetail
    this.handleData()
  },
  methods: {
    handleData () {
      if (this.commentArr.length > 2) {
        for (let i = 0; i < this.commentArr.length; i = i + 2) {
          this.resultArr.push([this.commentArr[i], this.commentArr[i + 1]])
        }
      } else if (this.commentArr.length === 2) {
        this.resultArr.push([this.commentArr[0], this.commentArr[1]])
      } else if (this.commentArr.length === 1) {
        this.resultArr.push([this.commentArr[0]])
      }
      this.pageNum = this.resultArr.length
    },
    changePage (str) {
        switch (str) {
            case 'first':
                this.pageIndex = 0
                break
            case 'last':
                if (this.pageIndex > 0)this.pageIndex--
                break
            case 'next':
                if (this.pageIndex < this.pageNum - 1) this.pageIndex++
                break
            case 'end':
                this.pageIndex = this.pageNum - 1
                break
        }
    }
  }
}
</script>
<style scoped>
.edit{
    width: 100%;
    border: 1px solid rgba(203, 203, 203);
    border-radius: 5px;
    margin-top: 10px;
    padding: 10px;
}
.edit .div-input{
    display: flex;
    width: 100%;
    align-items: center;
    margin-top: 10px;
}
.edit .div-input .input{
    width: 90%;
    height: 30px;
    border: 1px solid rgba(244, 244, 244);
    outline: none;
    outline-color: rgba(244, 244, 244);
    border-radius: 5px;
}
.edit .div-input .btn-send{
    width: 64px;
    height: 30px;
    line-height: 30px;
    margin-left: 20px;
    font-size: 12px;
    font-weight: bold;
    color: white;
    background-color: rgba(73, 147, 246);
    border-radius: 5px;
    cursor: pointer;
}
.edit .div-content{
    border-bottom: 1px solid rgba(244, 244, 244);
}
.edit .div-content .content-top{
    display: flex;
    justify-content: space-between;
    margin-top: 16px;
}
.edit .div-content .content-top .title{
    font-weight: bold;
}
.edit .div-content .content-top .date-time{
    display: flex;
    color: #DDDDDD;
}
.edit .div-content .content-top .date-time .date{
    margin-right: 14px;
}
.edit .div-content .content-bottom{
    text-align: left;
    margin-top: 4px;
    padding: 6px;
}
.edit .div-page{
    display: flex;
    justify-content: center;
}
.edit .div-page .page{
    margin-top: 20px;
}
</style>
