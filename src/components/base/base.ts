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
  const mycolumns = ref([])

  const columnReorder = (event) => {
    mycolumns.value = event.columns
  }

  const onRowClick = (event) => {
    console.debug(event.dataItem)
    emits('rowClick', event.dataItem)
  }

  onMounted(() => {
    console.debug('useBase is called!')
    mycolumns.value = props.tcColumns
  })

  return { onRowClick, columnReorder, mycolumns }
}
