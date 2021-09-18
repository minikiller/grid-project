<template>
  <Grid
    :style="{ height: '520px' }"
    :data-items="tcData"
    :columns="mycolumns"
    :reorderable="true"
    @rowclick="onRowClick"
    @columnreorder="columnReorder"
  >
  </Grid>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits, watch, onMounted } from 'vue'
import { Grid } from '@progress/kendo-vue-grid'
import { tcBaseProps, tcBaseEvents, useBase } from './base'

const props = defineProps({ ...tcBaseProps })
const emits = defineEmits([...tcBaseEvents])

const { onRowClick, columnReorder, mycolumns } = useBase(props, emits)

watch(() => props.tcData, (old, newVal) => {
  console.log('watch is called')
  console.log(newVal)
})

onMounted(() => {
  console.log('fdfdad')
})
</script>
