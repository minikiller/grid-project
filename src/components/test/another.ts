import { onMounted } from 'vue'
export const useAnother = () => {
  onMounted(() => {
    console.log('useAnother')
  })
  const anotherInfo = 'msdfdf'
  return { anotherInfo }
}
export const tcColumnsProp = {
  tcColumns: {
    type: Array,
    required: true
  }
}
