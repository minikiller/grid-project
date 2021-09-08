import { ref } from 'vue'

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

export const tcBaseEvents = ['rowClick', 'update:tcColumns']

export const useBase = (props, emits) => {
  const mycolumns = ref(props.tcColumns)

  const columnReorder = (event) => {
    mycolumns.value = event.columns
    emits('update:tcColumns', event.columns)
  }

  const onRowClick = (event) => {
    console.debug(event.dataItem)
    emits('rowClick', event.dataItem)
  }

  return { onRowClick, columnReorder, mycolumns }
}
