import { onMounted, ref, computed } from 'vue'
import { orderBy } from '@progress/kendo-data-query'
import { selectedID } from '../select/select'

export const tcSortProps = {
  tcSortColumns: {
    type: Array,
    required: false
  }
}

export const tcSortEvents = ['sortChange']

export const sortColumn = ref([])

export const useSort = (props, emits) => {
  const onSortChange = (e) => {
    console.log(e.sort)
    sortColumn.value = e.sort
    emits('sortChange', e.sort)
  }

  const sortedItems = computed(() => {
    // let result = props.tcData.map((item) => ({ ...item, selected: item[props.idField] === selectedID.value }))

    let items = props.tcData.map((item) => { return { ...item, selected: item[props.idField] === selectedID.value } })
    // result = items as unknown as any[]
    if (props.tcSortColumns) {
      items = orderBy(items, sortColumn.value)
    }
    return items
  })

  onMounted(() => {
    console.debug('useSort is called!')
    sortColumn.value = props.tcSortColumns
  })

  return { sortedItems, sortColumn, onSortChange }
}
