<template>
  <div class="all">
    <item v-for="obj in resultData" :key="obj.id" :obj="obj"></item>
  </div>
</template>

<script>
import Item from '@/components/Item.vue'
import resultJson from '@/assets/data.json'

export default {
  name: 'All',
  components: {
    Item
  },
  data () {
    return {
      resultData: resultJson.data
    }
  }
}
</script>
