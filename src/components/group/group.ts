import { onMounted, reactive, computed } from 'vue'
import { process, DataResult, filterBy, CompositeFilterDescriptor, orderBy } from '@progress/kendo-data-query'
import { sortColumn } from '../sort/sort'
import { selectedID } from '../select/select'
import { filterData } from '../filter/filter'
export const useGroup = (props, emits) => {
  const gridData: DataResult = { data: [], total: 0 }
  const skip = 0
  const take = 10
  const group = []

  onMounted(() => {
    getData()
    // console.log(gridData)
  })

  const rdata = reactive({
    gridData,
    // gridPageable: { pageSizes: true },
    skip,
    take,
    group,
    filter: undefined,
    sort: [],
    expandedItems: []
  })

  const getData = () => {
    rdata.gridData = process(props.tcData, {
      take: rdata.take,
      skip: rdata.skip,
      group: rdata.group,
      sort: rdata.sort,
      filter: rdata.filter
    })
  }

  const createAppState = (dataState) => {
    rdata.group = dataState.group
    rdata.take = dataState.take
    rdata.skip = dataState.skip
    rdata.group = dataState.group
    rdata.filter = dataState.filter
    rdata.sort = dataState.sort
    getData()
  }

  const dataStateChange = (event) => {
    console.log(event.data)
    createAppState(event.data)
  }

  const items = computed(() => {
    console.log('selectid is ', selectedID.value, props.idField)
    rdata.gridData.data = rdata.gridData.data.map((item) => { return { ...item, selected: item[props.idField] === selectedID.value } })
    // // result = items as unknown as any[]
    // if (props.tcSortColumns) {
    //   items = orderBy(items, sortColumn.value)
    // }
    console.log('filtered')
    // if (filterData.value !== null) { rdata.gridData.data = filterBy(items, filterData.value) }
    return rdata.gridData
  })

  const groupItems = computed(() => {
    let items = props.tcData.map((item) => { return { ...item, selected: item[props.idField] === selectedID.value } })
    // result = items as unknown as any[]
    if (props.tcSortColumns) {
      items = orderBy(items, sortColumn.value)
    }
    console.log('filtered')
    if (filterData.value !== null) { return filterBy(items, filterData.value) } else { return items }
  })

  const expandChange = (event) => {
    console.log(event.value)
    console.log(event.target.$props.expandField)
    event.dataItem[event.target.$props.expandField] = event.value
  }

  return { dataStateChange, expandChange, rdata, items }
}
