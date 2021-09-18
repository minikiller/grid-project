<template>
  <group-grid
    :tc-data="myData"
    :tc-columns="myColumns"
    :id-field="'ProductID'"
    :tc-sort-columns="sortColumns"
    @iconClick="onIconClick"
  >
  </group-grid>
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
      :allColumn="colData"
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
import { Window } from '@progress/kendo-vue-dialogs'
import { Button } from '@progress/kendo-vue-buttons'

import ColumnGrid from '../column/ColumnGrid.vue'
import GroupGrid from '../group/GroupGrid.vue'

import { ref, defineProps, onMounted, computed } from 'vue'

const visibleWindow = ref(false)
const columnData = ref()
// const myColumns = ref([])
const myColumns = ref([{ field: 'ProductID' }])
const sortColumns = [{ field: 'ProductID', dir: 'desc' }]

const mygrid = ref<InstanceType<typeof ColumnGrid>>(null)
// const mygrid = ref<typeof ColumnGrid | null>(null)
const props = defineProps({
  myColumns: { type: Array, required: true },
  myData: { type: Array, required: true }
})

const onIconClick = () => {
  visibleWindow.value = !visibleWindow.value
  console.log('clicked')
}

const colData = computed(() => {
  const value = Object.assign([], props.myColumns)
  const idx = value.findIndex(e => {
    return e.field === 'ID'
  })
  value.splice(idx, 1)
  // add selected to array
  value.map((item) => { item.selected = false })
  return value
})

const onCancel = () => {
  visibleWindow.value = !visibleWindow.value
}

const onSave = () => {
  // console.log(mygrid.value?.getSelect())
  console.log('dfdfdfdfdf')
  visibleWindow.value = !visibleWindow.value
  console.log(columnData.value)
  myColumns.value.map((item) => {
    if (item.field === 'ID') { return }
    item.hidden = true
  })
  if (columnData.value) {
    // console.log(columnData.value)
    columnData.value.map((item) => {
      const index = myColumns.value.findIndex(_item => _item.field === item.field)
      if (index > -1) {
        myColumns.value[index].hidden = false
        console.log('prpo is ', myColumns.value[index].hidden)
        console.log(myColumns.value[index].title)
      } else {
        console.log('not find', item.id)
      }
    })
    console.log(myColumns.value)
  }
}

const onColumnChange = (data) => {
  console.log(data)
  columnData.value = data
}

onMounted(() => {
  myColumns.value = props.myColumns
})

</script>
