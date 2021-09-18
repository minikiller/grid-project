<template>
  <div>
    <base-grid
      v-model:tc-columns="columns"
      :tc-data="mydata"
      @tcColumnsChange="hello"
    ></base-grid>
  </div>
</template>

<script setup lang="ts">
import BaseGrid from '@/components/base/BaseGrid.vue'
import { createRandomData, columns } from '@/components/template/data'
import { onMounted, ref } from '@vue/runtime-core'
const mydata = ref([])// createRandomData(20)

// async const getdata = () => {
//   await setTimeout((resolve) => {
//     const data = createRandomData(20)
//     resolve(data)
//   }, 2000)
// }

// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const data = createRandomData(20)
//       resolve(data)
//     }, 2000)
//   })
//   myPromise.then((data) => {
//     mydata.value = data
//   })
const getdata = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = createRandomData(20)
      resolve(data)
    }, 1000)
  })
}

// const getdata = async () => {
//   await new Promise(resolve => setTimeout(() => {
//     resolve(createRandomData(20))
//   }, 1000))
// }

// const data = ref([])
// mydata.value = createRandomData(20)
onMounted(() => {
  // mydata.value = setTimeout(() => {
  //   return createRandomData(20)
  // }, 5000)
  // const myPromise = new Promise((resolve, reject) => {

  // })
  // const data = getdata()
  // if (mydata)
  getdata().then((data) => {
    console.log('ehel')
    mydata.value = data
  })

  // data.value = createRandomData(20)
})

</script>
