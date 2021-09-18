import { onMounted, ref, computed } from 'vue'
import _ from 'lodash'
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

// export const tcBaseEvents = ['rowClick']
export const tcBaseEvents = ['rowClick', 'update:tcColumns', 'tcColumnsChange']

export const useBase = (props, emits) => {
  // const mycolumns = ref([])
  const mycolumns = ref(props.tcColumns)
  // mycolumns = computed({
  //   get: () => props.tcColumns,
  //   set: val => {
  //     // emits('update:tcColumns', val)
  //     emits('tcColumnsChange', val)
  //   }
  // })

  const columnReorder = (event) => {
    // props.tcColumns = event.columns
    mycolumns.value = event.columns
    emits('update:tcColumns', event.columns)
    emits('tcColumnsChange', event.columns)
  }

  const onRowClick = (event) => {
    console.debug(event.dataItem)
    emits('rowClick', event.dataItem)
  }

  // onMounted(() => {
  //   console.debug('useBase is called!')
  //   mycolumns.value = _.cloneDeep(props.tcColumns)
  //   console.log(mycolumns.value)
  // })

  return { onRowClick, columnReorder, mycolumns }
}
