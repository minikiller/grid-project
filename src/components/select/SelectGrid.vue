<template>
  <Grid
    :data-items="items"
    :columns="tcColumns"
    @rowclick="onRowClick"
    :selected-field="selectedField"
  >
  </Grid>
</template>

<script setup lang="ts">
import { Grid } from '@progress/kendo-vue-grid'
import { defineProps, defineEmits } from 'vue'
import { tcBaseProps, tcBaseEvents } from '../base/base'
import { tcSelectProps, useSelect } from './select'

const props = defineProps({ ...tcBaseProps, ...tcSelectProps })

const emits = defineEmits([...tcBaseEvents])

const { selectedField, items, onRowClick } = useSelect(props, emits)

</script>
