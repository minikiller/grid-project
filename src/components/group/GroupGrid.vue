<template>
  <Grid
    ref="grid"
    :data-items="items"
    :columns="tcColumns"
    @rowclick="onRowClick"
    :selected-field="selectedField"
    :sortable="true"
    :sort="rdata.sort"
    :filterable="true"
    :filter="rdata.filter"
    :groupable="true"
    :group="rdata.group"
    :take="rdata.take"
    :skip="rdata.skip"
    :expand-field="'expanded'"
    @datastatechange="dataStateChange"
    @expandchange="expandChange"
  >
    <template v-slot:myHeaderTemplate="{}">
      <a class="k-link" @click="onIconClick">
        <span class="k-icon k-i-settings" />
      </a>
    </template>
  </Grid>
</template>

<script setup lang="ts">
import { Grid } from '@progress/kendo-vue-grid'
import { defineProps, defineEmits } from 'vue'
import { tcBaseProps, tcBaseEvents } from '../base/base'
import { tcSelectProps, useSelect } from '../select/select'
import { tcSortProps, tcSortEvents, useSort } from '../sort/sort'
import { tcFilterProps, tcFilterEvents, useFilter, filterData } from '../filter/filter'
import { useGroup } from './group'

const props = defineProps({ ...tcBaseProps, ...tcSelectProps, ...tcSortProps, ...tcFilterProps })

const emits = defineEmits(['iconClick', ...tcBaseEvents, ...tcSortEvents, ...tcFilterEvents])

const { selectedField, onRowClick } = useSelect(props, emits)
const { sortColumn, onSortChange } = useSort(props, emits)
const { onFilterChange } = useFilter(props, emits)
const { dataStateChange, expandChange, rdata, items } = useGroup(props, emits)

const onIconClick = () => {
  emits('iconClick')
  console.log('clicked')
}

</script>
