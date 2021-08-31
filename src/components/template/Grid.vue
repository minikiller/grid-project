<template>
  <Grid
    :style="{ height: '520px' }"
    :data-items="grid_data"
    :columns="static_columns"
    @rowclick="onRowClick"
  >
  </Grid>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, defineExpose, reactive, computed } from 'vue'
import { Grid } from '@progress/kendo-vue-grid'
import { useLogger } from '@/plugins/vue-logger-plugin'

const logger = useLogger()

const props = defineProps({
  grid_data: {
    type: Array,
    required: true
  },
  static_columns: {
    type: Array,
    required: true
  }
})

const emits = defineEmits(['rowClick'])

const onRowClick = (event) => {
  logger.debug(event.dataItem)
  // event.dataItem[selectedField] = !event.dataItem[selectedField]
  emits('rowClick', event.dataItem)
}

const info = () => {
  logger.debug('info is called')
}

defineExpose({ info })
</script>
