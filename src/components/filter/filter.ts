import { onMounted, onBeforeMount, ref, computed } from 'vue'
import { filterBy, orderBy } from '@progress/kendo-data-query'
import { sortColumn } from '../sort/sort'
import { selectedID } from '../select/select'

export const tcFilterProps = {
  // tcFilter: {
  //   type: Object,
  //   required: false
  // }
}

export const tcFilterEvents = ['filterChange']

export const filterData = ref({
  logic: 'and',
  filters: []
})

export const useFilter = (props, emits) => {
  const onFilterChange = (ev) => {
    filterData.value = ev.filter
    emits('filterChange', ev.filter)
  }

  const filterItems = computed(() => {
    let items = props.tcData.map((item) => { return { ...item, selected: item[props.idField] === selectedID.value } })
    // result = items as unknown as any[]
    if (props.tcSortColumns) {
      items = orderBy(items, sortColumn.value)
    }
    console.log('filtered')
    if (filterData.value !== null) { return filterBy(items, filterData.value) } else { return items }
  })

  onMounted(() => {
    console.debug('useFilter is called!')
  })

  onBeforeMount(() => {
    console.debug('useFilter is before called!')
  })

  return { onFilterChange, filterItems }
}
