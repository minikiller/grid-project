import { onMounted } from 'vue'

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
  onMounted(() => {
    console.debug('useBase is called!')
  })

  const onRowClick = (event) => {
    console.debug(event.dataItem)
    emits('rowClick', event.dataItem)
  }
  return { onRowClick }
}
