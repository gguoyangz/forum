<template>
  <div class="page">
      <div class="first" @click="goToPage('first')">首页</div>
      <div class="last" @click="goToPage('last')">上一页</div>
      <div class="index">{{page}}</div>
      <div class="next" @click="goToPage('next')">下一页</div>
      <div class="end" @click="goToPage('end')">尾页</div>
  </div>
</template>

<script>

export default {
  name: 'Page',
  props: {
    templePage: {
      type: Number,
      default: 1
    }
  },
  data () {
    return {
      page: this.templePage
    }
  },
  watch: {
    templePage: {
        immediate: true,
        handler (val) {
            this.page = val + 1
        }
    }
  },
  methods: {
      goToPage (str) {
        this.$emit('goToPage', str)
      }
  }
}
</script>
<style scoped>
.page{
    display: flex;
    border: 1px solid rgba(223, 223, 223);
    align-items: center;
    justify-content: center;
}
.page div{
    border-right: 1px solid rgba(223, 223, 223) ;
    padding: 4px;
    cursor: pointer;
}
.page .index{
    min-width: 20px;
    background-color: rgba(251, 57, 55);
    color: white;
}
</style>
