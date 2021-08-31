import { onMounted, ref, computed } from 'vue'

export const tcSelectProps = {
  idField: {
    type: String,
    required: true
  }
}

export const useSelect = (props, emits) => {
  const selectedField = 'selected'
  const selectedID = ref(1)

  onMounted(() => {
    console.debug('useSelect is called!')
  })

  const onRowClick = (event) => {
    console.log(event.dataItem)
    // event.dataItem[selectedField] = !event.dataItem[selectedField]
    selectedID.value = event.dataItem[props.idField]
    // event.dataItem[selectedField] = !event.dataItem[selectedField]
    emits('rowClick', event.dataItem)
  }

  const items = computed(() => {
    console.debug('computed')
    return props.tcData.map((item) => ({ ...item, selected: item[props.idField] === selectedID.value }))
  })

  return { selectedField, selectedID, items, onRowClick }
}
