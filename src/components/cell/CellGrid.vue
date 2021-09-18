<template>
  <grid
    :style="{ height: '280px' }"
    :data-items="items"
    :cell-render="cellTemplate"
    :columns="columns"
    @custom="customHandler"
  >
  </grid>
</template>

<script setup lang="ts">
import { markRaw } from 'vue'
import { Grid } from '@progress/kendo-vue-grid'
import ComponentInstance from './ComponentInstance.vue'

const cellTemplate = markRaw(ComponentInstance)
const columns = [
  { field: 'ProductID' },
  { field: 'ProductName', title: 'Product Name' },
  { field: 'UnitPrice', title: 'Unit Price' }
]
const items = [
  {
    ProductID: 1,
    ProductName: 'Chai',
    UnitPrice: 18.0
  },
  {
    ProductID: 2,
    ProductName: 'Chang',
    UnitPrice: 19.0
  },
  {
    ProductID: 3,
    ProductName: 'Aniseed Syrup',
    UnitPrice: 10.0
  },
  {
    ProductID: 4,
    ProductName: "Chef Anton's Cajun Seasoning",
    UnitPrice: 22.0
  }
]

const customHandler = (e) => {
  console.log('customHandler', e)
}

</script>
