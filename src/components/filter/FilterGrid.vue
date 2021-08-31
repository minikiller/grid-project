<template>
  <Grid
    :data-items="filterItems"
    :columns="tcColumns"
    @rowclick="onRowClick"
    :selected-field="selectedField"
    :sortable="true"
    :sort="sortColumn"
    @sortchange="onSortChange"
    :filterable="true"
    :filter="filterData"
    @filterchange="onFilterChange"
  >
  </Grid>
</template>

<script setup lang="ts">
import { Grid } from '@progress/kendo-vue-grid'
import { defineProps, defineEmits, onMounted } from 'vue'
import { tcBaseProps, tcBaseEvents } from '../base/base'
import { tcSelectProps, useSelect } from '../select/select'
import { tcSortProps, tcSortEvents, useSort } from '../sort/sort'

import { tcFilterProps, tcFilterEvents, useFilter, filterData } from './filter'

const props = defineProps({ ...tcBaseProps, ...tcSelectProps, ...tcSortProps, ...tcFilterProps })

const emits = defineEmits([...tcBaseEvents, ...tcSortEvents, ...tcFilterEvents])

const { selectedField, onRowClick } = useSelect(props, emits)
const { sortColumn, onSortChange } = useSort(props, emits)
const { onFilterChange, filterItems } = useFilter(props, emits)

onMounted(() => {
  console.debug('useFilter dfdfd is called!')
})

</script>
