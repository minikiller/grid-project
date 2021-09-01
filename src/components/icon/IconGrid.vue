<template>
  <grid :style="{ height: '230px' }" :data-items="items" :columns="columns">
    <template v-slot:myHeaderTemplate="{}">
      <a class="k-link" @click="onIconClick">
        <span class="k-icon k-i-settings" />
      </a>
    </template>
  </grid>
  <window
    v-if="visibleWindow"
    :title="'Column Setup'"
    :width="600"
    :height="400"
    @close="onCancel"
  >
    <column-grid
      ref="mygrid"
      @columnChange="onColumnChange"
      :allColumn="columns"
    ></column-grid>
    <div class="text-right">
      <button type="button" class="k-button" @click="onCancel">Cancel</button>
      <button type="button" class="k-button k-primary" @click="onSave">
        Save
      </button>
    </div>
  </window>
</template>

<script setup lang="ts">
import { Grid } from '@progress/kendo-vue-grid'
import { Window } from '@progress/kendo-vue-dialogs'
import { Button } from '@progress/kendo-vue-buttons'

import ColumnGrid from '../column/ColumnGrid.vue'

import { ref } from 'vue'

const visibleWindow = ref(false)
const columnData = ref()
const mygrid = ref<InstanceType<typeof ColumnGrid>>(null)
// const mygrid = ref<typeof ColumnGrid | null>(null)
const columns = ref([
  {
    ID: 1,
    field: 'ID',
    title: 'ID',
    width: '40px',
    headerCell: 'myHeaderTemplate',
    hidden: false,
    selected: false
  },
  {
    ID: 2,
    field: 'ProductName',
    title: 'Product Name',
    selected: false,
    hidden: false
  },
  {
    ID: 3,
    field: 'UnitPrice',
    title: 'Price',
    hidden: false,
    selected: false
  }
])

const items = [{
  ID: 1,
  ProductName: 'Chai',
  UnitPrice: 18.0000
},
{
  ID: 2,
  ProductName: 'Chang',
  UnitPrice: 19.0000
},
{
  ID: 3,
  ProductName: 'Aniseed Syrup',
  UnitPrice: 10.0000
},
{
  ID: 4,
  ProductName: "Chef Anton's Cajun Seasoning",
  UnitPrice: 22.0000
}]

const onIconClick = () => {
  visibleWindow.value = !visibleWindow.value
  console.log('clicked')
}

const onCancel = () => {
  visibleWindow.value = !visibleWindow.value
}

const onSave = () => {
  // console.log(mygrid.value?.getSelect())
  visibleWindow.value = !visibleWindow.value
  console.log(columnData.value)
  columns.value.map((item) => {
    item.hidden = true
  })
  if (columnData.value) {
    // console.log(columnData.value)
    columnData.value.map((item) => {
      const index = columns.value.findIndex(_item => _item.ID === item.ID)
      if (index > -1) {
        columns.value[index].hidden = false
      }
    })
  }
}

const onColumnChange = (data) => {
  // console.log(data)
  columnData.value = data
}

</script>
