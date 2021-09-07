<template>
  <div>
    <base-grid :tc-columns="columns" :tc-data="mydata"></base-grid>
  </div>
</template>

<script setup lang="ts">
import BaseGrid from '@/components/base/BaseGrid.vue'
import { createRandomData, columns } from '@/components/template/data'
import { onMounted, ref } from '@vue/runtime-core'
const mydata = ref([])// createRandomData(20)

// const data = ref([])
// mydata.value = createRandomData(20)
onMounted(() => {
  // mydata.value = setTimeout(() => {
  //   return createRandomData(20)
  // }, 5000)
  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = createRandomData(20)
      resolve(data)
    }, 2000)
  })
  myPromise.then((data) => {
    mydata.value = data
  })
  // data.value = createRandomData(20)
})
</script>

<style scoped>
</style>
