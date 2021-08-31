<template>
  <Grid
    :data-items="sortedItems"
    :columns="tcColumns"
    @rowclick="onRowClick"
    :selected-field="selectedField"
    :sortable="true"
    :sort="sortColumn"
    @sortchange="onSortChange"
  >
  </Grid>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'
import { Grid } from '@progress/kendo-vue-grid'
import { tcBaseProps, tcBaseEvents } from '../base/base'
import { tcSelectProps, useSelect } from '../select/select'
import { tcSortProps, tcSortEvents, useSort } from './sort'

const props = defineProps({ ...tcBaseProps, ...tcSelectProps, ...tcSortProps })

const emits = defineEmits([...tcBaseEvents, ...tcSortEvents])

const { selectedField, onRowClick, items } = useSelect(props, emits)
const { sortedItems, sortColumn, onSortChange } = useSort(props, emits)
</script>
