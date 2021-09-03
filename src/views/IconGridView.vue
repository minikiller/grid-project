<template>
  <div>
    <icon-grid
      :my-columns="columns"
      :my-data="data"
    ></icon-grid>
  </div>
</template>

<script setup lang="ts">
import IconGrid from '@/components/icon/IconGrid.vue'
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
