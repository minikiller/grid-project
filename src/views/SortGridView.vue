<template>
  <div>
    <sort-grid
      :tc-columns="columns"
      :tc-data="data"
      :id-field="'ProductID'"
      @rowClick="onRowClick"
      :tc-sort-columns="sortColumns"
      @sortChange="onSortChange"
    ></sort-grid>
  </div>
</template>

<script setup lang="ts">
import SortGrid from '@/components/sort/SortGrid.vue'
import { createRandomData, columns } from '@/components/template/data'
import { onMounted, ref } from '@vue/runtime-core'

const sortColumns = [{ field: 'ProductID', dir: 'desc' }]

const data = createRandomData(20)
// const data = ref([])
onMounted(() => {
  // data.value = createRandomData(20)
})

const onRowClick = () => {
  console.log('row clicked')
}

const onSortChange = () => {
  console.log('onSortChange')
}
</script>

<style scoped>
</style>
