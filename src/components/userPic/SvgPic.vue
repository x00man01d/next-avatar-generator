<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  size: number
  data: UserPic
}>()

const backgroundColor = computed(() => {
  const h = props.data.backgroundSolid.hue
  const s = props.data.backgroundSolid.saturation
  const l = props.data.backgroundSolid.lightness
  return `hsl(${h}, ${s}%, ${l}%)`
})
</script>
<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="size"
    :height="size"
    viewBox="0 0 120 120"
    fill="none"
  >
    <circle
      cx="60"
      cy="60"
      r="59"
      :fill="backgroundColor"
      stroke="#ccc"
      stroke-width="2"
    />
  </svg>
</template>
