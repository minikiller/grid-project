<template>
  <Grid
    :style="{ height: '520px' }"
    :data-items="tcData"
    :columns="tcColumns"
    @rowclick="onRowClick"
  >
  </Grid>
  {{ baseInfo }}{{ anotherInfo }}
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'
import { Grid } from '@progress/kendo-vue-grid'
import { useAnother, tcColumnsProp } from './another'
import { useBase, tcDataProp } from './base'

const { anotherInfo } = useAnother()
const { baseInfo } = useBase()

const props = defineProps({ ...tcDataProp, ...tcColumnsProp })

const emits = defineEmits(['rowClick'])

const onRowClick = (event) => {
  // event.dataItem[selectedField] = !event.dataItem[selectedField]
  emits('rowClick', event.dataItem)
}

</script>
