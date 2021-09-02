<template>
  <grid :style="{ height: '230px' }" :data-items="tcData" :columns="columns">
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
import { Grid } from '@progress/kendo-vue-grid'
import { Window } from '@progress/kendo-vue-dialogs'
import { Button } from '@progress/kendo-vue-buttons'

import ColumnGrid from '../column/ColumnGrid.vue'

import { ref, defineProps, onMounted, computed } from 'vue'

const visibleWindow = ref(false)
const columnData = ref()
const mygrid = ref<InstanceType<typeof ColumnGrid>>(null)
// const mygrid = ref<typeof ColumnGrid | null>(null)
const props = defineProps({
  tcColumns: { type: Array, required: true },
  tcData: { type: Array, required: true }
})

const columns = ref([])

const onIconClick = () => {
  visibleWindow.value = !visibleWindow.value
  console.log('clicked')
}

const colData = computed(() => {
  const value = Object.assign([], props.tcColumns)
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
  columns.value.map((item) => {
    if (item.field === 'ID') { return }
    item.hidden = true
  })
  if (columnData.value) {
    // console.log(columnData.value)
    columnData.value.map((item) => {
      const index = columns.value.findIndex(_item => _item.field === item.field)
      if (index > -1) {
        columns.value[index].hidden = false
        console.log('prpo is ', columns.value[index].hidden)
        console.log(columns.value[index].title)
      } else {
        console.log('not find', item.id)
      }
    })
    console.log(columns.value)
  }
}

const onColumnChange = (data) => {
  console.log(data)
  columnData.value = data
}

onMounted(() => {
  columns.value = props.tcColumns
})

</script>
