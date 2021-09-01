<template>
  <Grid
    :style="{ height: '520px' }"
    :data-items="tcData"
    :columns="columns"
    :reorderable="true"
    @rowclick="onRowClick"
    @columnreorder="columnReorder"
  >
  </Grid>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'
import { Grid } from '@progress/kendo-vue-grid'
import { tcBaseProps, tcBaseEvents, useBase } from './base'

const props = defineProps({ ...tcBaseProps })

const emits = defineEmits([...tcBaseEvents])

const { onRowClick, columnReorder, columns } = useBase(props, emits)

</script>
