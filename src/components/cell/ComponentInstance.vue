<template>
  <td :class="className" @click="clickHandler">
    <b>
      <autocomplete
        :data-items="dataItem"
        :placeholder="'Your favorite sport'"
      ></autocomplete
    ></b>
  </td>
</template>
<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'
import { AutoComplete, ComboBox, DropDownList, MultiSelect } from '@progress/kendo-vue-dropdowns'
const props = defineProps({
  field: String,
  dataItem: Object,
  format: String,
  className: String,
  columnIndex: Number,
  columnsCount: Number,
  rowType: String,
  level: Number,
  expanded: Boolean,
  editor: String
})

const emits = defineEmits(['custom'])

const clickHandler = function (e) {
  emits('custom', e)
}
const getNestedValue = function (fieldName, dataItem) {
  const path = fieldName.split('.')
  let data = dataItem
  path.forEach((p) => {
    data = data ? data[p] : undefined
  })
  console.log(data)
  return data
}

</script>
