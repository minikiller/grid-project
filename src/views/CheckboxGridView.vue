<template>
  <div>
    <checkbox-grid
      :tc-columns="columns"
      :tc-data="data"
      :id-field="'ProductID'"
      @rowClick="onRowClick"
    ></checkbox-grid>
  </div>
</template>

<script setup lang="ts">
import CheckboxGrid from '@/components/checkbox/CheckboxGrid.vue'
import { createRandomData, columns } from '@/components/template/data'
import { onMounted, ref } from '@vue/runtime-core'

const data = createRandomData(20)
// const data = ref([])
onMounted(() => {
  // data.value = createRandomData(20)
})

const onRowClick = () => {
  console.log('row clicked')
}
</script>

<style scoped>
</style>
