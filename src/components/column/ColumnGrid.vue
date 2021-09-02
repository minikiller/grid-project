<template>
  <div class="grid-container">
    <CheckboxGrid
      ref="leftGrid"
      :tc-data="rdata.leftData"
      :tc-columns="staticColumns"
      @selectChanged="onLeftSelectChanged"
      @dataChanged="onLeftDataChanged"
    >
    </CheckboxGrid>
    <div class="buttons-container">
      <button
        ref="leftBtn"
        class="k-button"
        @click="onLeftBtnClick"
        :disabled="isLeftBtnDisabled"
      >
        >>
      </button>
      <br />
      <button
        ref="rightBtn"
        class="k-button"
        @click="onRightBtnClick"
        :disabled="isRightBtnDisabled"
      >
        &lt;&lt;
      </button>
    </div>
    <CheckboxGrid
      ref="rightGrid"
      :tc-data="rdata.rightData"
      :tc-columns="staticColumns"
      @selectChanged="onRightSelectChanged"
      @dataChanged="onRightDataChanged"
    >
    </CheckboxGrid>
  </div>
</template>

<script setup lang="ts">
/* eslint-disable camelcase */
import CheckboxGrid from '../checkbox/CheckboxGrid.vue'
// import { ColumnDefine } from '../grid.interface'
import { ref, defineEmits, reactive, defineProps, onMounted, PropType } from 'vue'

const emit = defineEmits(['columnChange'])

const props = defineProps({
  allColumn: { type: Array, required: true },
  idFields: String
})

const leftGrid = ref()
const rightGrid = ref()
const leftBtn = ref()
const rightBtn = ref()

const isLeftBtnDisabled = ref(true)
const isRightBtnDisabled = ref(true)
const staticColumns = [
  // {
  //   field: 'ID',
  //   filterable: false,
  //   title: 'ID',
  //   width: '50px'
  //   // hidden: true
  // },
  { field: 'field', title: 'Column Name' },
  { field: 'title', title: 'Title Name' }
]

const rdata = reactive(
  {
    leftData: [],
    rightData: []
  }
)

onMounted(() => {
  console.log('onmounted')
  props.allColumn.map((item) => {
    // if (item.field === 'ID') {
    //   return
    // }
    if (item.hidden === true) {
      rdata.leftData.push(item)
    } else {
      rdata.rightData.push(item)
    }
  })
})

const onRightBtnClick = () => {
  console.log('onRight_clicked')
  const data = rdata.rightData.filter((item) => {
    return item.selected === true
  })
  data.map((item) => {
    console.log(item)
    const index = rdata.rightData.indexOf(item)
    if (index > -1) {
      rdata.rightData.splice(index, 1)
    }
    item.selected = false
    rdata.leftData.push(item)
  })
  emit('columnChange', rdata.rightData)
}

const onLeftBtnClick = () => {
  console.log('onLeft_clicked')
  const data = rdata.leftData.filter((item) => {
    return item.selected === true
  })
  data.map((item) => {
    console.log(item)
    const index = rdata.leftData.indexOf(item)
    if (index > -1) {
      rdata.leftData.splice(index, 1)
    }
    item.selected = false
    rdata.rightData.push(item)
  })
  emit('columnChange', rdata.rightData)
}
const onLeftSelectChanged = (data) => {
  // console.log(data)
  rdata.leftData = data
  isLeftBtnDisabled.value = isEnabled(rdata.leftData)
  console.log(rdata.leftData)
}

const onRightSelectChanged = (data) => {
  // console.log(data)
  rdata.rightData = data
  isRightBtnDisabled.value = isEnabled(rdata.rightData)
  console.log(rdata.rightData)
}

const onRightDataChanged = (data) => {
  isRightBtnDisabled.value = isEnabled(rdata.rightData)
}

const onLeftDataChanged = (data) => {
  isLeftBtnDisabled.value = isEnabled(rdata.leftData)
}

const isEnabled = (data) => {
  const filtered = data.filter((item) => {
    return item.selected === true
  })
  return !(filtered.length > 0)
}

// watch(
//   () => [...rdata.rightData, ...rdata.leftData],
//   (currentValue, oldValue) => {
//     console.log('dataChanged', currentValue)
//   }
// )

</script>

<style>
.grid-container {
  display: grid;
  grid-template-columns: 1fr 40px 1fr;
  grid-gap: 20px;
}

.buttons-container {
  padding-top: 240px;
}
</style>
