import { onMounted, ref } from 'vue'

export const tcBaseProps = {
  tcData: {
    type: Array,
    required: true
  },
  tcColumns: {
    type: Array,
    required: true
  }
}

export const tcBaseEvents = ['rowClick']

export const useBase = (props, emits) => {
  const columns = ref([])

  const columnReorder = (event) => {
    columns.value = event.columns
  }

  const onRowClick = (event) => {
    console.debug(event.dataItem)
    emits('rowClick', event.dataItem)
  }

  onMounted(() => {
    console.debug('useBase is called!')
    columns.value = props.tcColumns
  })

  return { onRowClick, columnReorder, columns }
}
