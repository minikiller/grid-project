<template>
  <Grid
    :style="{ height: '520px' }"
    :data-items="tcData"
    :columns="tcColumns"
    @rowclick="onRowClick"
  >
  </Grid>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'
import { Grid } from '@progress/kendo-vue-grid'
import { tcBaseProps, tcBaseEvents, useBase } from './base'

const props = defineProps({ ...tcBaseProps })

const emits = defineEmits([...tcBaseEvents])

const { onRowClick } = useBase(props, emits)

</script>
