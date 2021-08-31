<template>
  <div>
    <base-grid :tc-columns="columns" :tc-data="data"></base-grid>
  </div>
</template>

<script setup lang="ts">
import BaseGrid from '@/components/base/BaseGrid.vue'
import { createRandomData, columns } from '@/components/template/data'
import { onMounted, ref } from '@vue/runtime-core'
const data = createRandomData(20)
// const data = ref([])
onMounted(() => {
  // data.value = createRandomData(20)
})
</script>

<style scoped>
</style>
