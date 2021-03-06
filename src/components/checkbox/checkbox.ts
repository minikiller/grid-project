import { onMounted, onBeforeMount, watch, computed, reactive } from 'vue'
import { selectedField } from '../select/select'
import { EventType } from '@/model/event-type/EventType'

export const tcCheckboxEvents = ['dataChanged', 'selectChanged']

export const useCheckbox = (props, emits) => {
  const rdata = reactive({
    items: [] as any[]
  })
  const checkboxColumns = computed(() => {
    // console.log('select fin')
    let notSelectedIndex
    if (props.tcData.length === 0) notSelectedIndex = 0
    else {
      notSelectedIndex = rdata.items.findIndex((i) => {
        return i.selected === false
      })
    }
    return [
      {
        field: 'selected',
        width: '50px',
        headerSelectionValue: notSelectedIndex === -1,
        filterable: false
      },
      ...props.tcColumns
    ]
  })

  const onSelectionChange = (event) => {
    console.log(event)
    event.dataItem[selectedField] = !event.dataItem[selectedField]
    emits('selectChanged', props.tcData)
  }

  const onRowClick = (event) => {
    console.log('selectChanged from checkbox')
    event.dataItem[selectedField] = !event.dataItem[selectedField]
    emits('selectChanged', rdata.items)
  }

  const onHeaderSelectionChange = (event) => {
    console.log(event)
    const checked = event.event.target.checked
    rdata.items = rdata.items.map((item) => {
      return { ...item, selected: checked }
    })
    emits('selectChanged', rdata.items)
  }

  onMounted(() => {
    console.debug('useCheckbox is called!')
    rdata.items = props.tcData.map((item) => {
      // console.log(item)
      return { ...item, selected: false }
    })
    emits('selectChanged', rdata.items)
  })
  onBeforeMount(() => {
    // console.debug('useCheckbox is called!')
    // rdata.items = props.tcData.map((item) => {
    //   // console.log(item)
    //   return { ...item, selected: false }
    // })
    // emits('selectChanged', rdata.items)
  })

  watch(
    () => [...rdata.items],
    (currentValue, oldValue) => {
      // rdata.items = currentValue.map((item) => {
      //   // console.log(item)
      //   return { ...item, selected: false }
      // })
      emits('dataChanged', currentValue)
    }
  )

  return { checkboxColumns, rdata, onSelectionChange, onRowClick, onHeaderSelectionChange }
}
