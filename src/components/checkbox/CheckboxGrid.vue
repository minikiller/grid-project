<template>
  <Grid
    :data-items="rdata.items"
    :columns="checkboxColumns"
    @rowclick="onRowClick"
    :selected-field="selectedField"
    @selectionchange="onSelectionChange"
    @headerselectionchange="onHeaderSelectionChange"
  >
  </Grid>
</template>

<script setup lang="ts">
import { Grid } from '@progress/kendo-vue-grid'
import { defineProps, defineEmits } from 'vue'
import { tcBaseProps, tcBaseEvents } from '../base/base'
import { tcSelectProps, useSelect } from '../select/select'
import { tcCheckboxEvents, useCheckbox } from './checkbox'

const props = defineProps({ ...tcBaseProps, ...tcSelectProps })

const emits = defineEmits([...tcBaseEvents, ...tcCheckboxEvents])

const { selectedField } = useSelect(props, emits)
const { checkboxColumns, rdata, onSelectionChange, onRowClick, onHeaderSelectionChange } = useCheckbox(props, emits)

</script>
