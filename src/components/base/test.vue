<template>
  <div>{{ name }}</div>
  <div>{{ size }}</div>
</template>

<script lang="ts" setup>
type Data = {
  name: string
  size: number
}
const props = defineProps<Data>()

</script>

<style scoped>
</style>
v3
