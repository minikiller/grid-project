import { onMounted, ref, computed } from 'vue'
import { orderBy } from '@progress/kendo-data-query'
import { useSelect } from '../select/select'

export const tcSortProps = {
  tcSortColumns: {
    type: Array,
    required: false
  }
}

export const tcSortEvents = ['sortChange']

export const useSort = (props, emits) => {
  const sortColumn = ref([])

  const onSortChange = (e) => {
    console.log(e.sort)
    sortColumn.value = e.sort
    emits('sortChange', e.sort)
  }

  const sortedItems = computed(() => {
    // let result = props.tcData.map((item) => ({ ...item, selected: item[props.idField] === selectedID.value }))

    // const { items } = useSelect(props, emits)
    let result: any[] = []
    // result = items as unknown as any[]
    console.log('fdfdf')
    if (props.tcSortColumns) {
      result = orderBy(props.tcData, sortColumn.value)
    }
    return result
  })

  onMounted(() => {
    console.debug('useSort is called!')
    sortColumn.value = props.tcSortColumns
  })

  return { sortedItems, sortColumn, onSortChange }
}
