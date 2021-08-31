import { onMounted } from 'vue'
export const useBase = () => {
  onMounted(() => {
    console.log('useBase')
  })
  const msg = () => {
    console.log('sdf')
  }
  const baseInfo = 'sfdfdfdf'
  return { msg, baseInfo }
}
export const tcDataProp = {
  tcData: {
    type: Array,
    required: true
  }
}
