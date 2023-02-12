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

const colorFromHSL = (hsl: HSL) =>
  `hsla(${hsl.hue}, ${hsl.saturation}%, ${hsl.lightness}%)`
</script>
<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="size"
    :height="size"
    viewBox="0 0 120 120"
    fill="none"
  >
    <circle cx="60" cy="60" r="59" :fill="backgroundColor" />
    <clipPath id="cut-off">
      <circle cx="60" cy="60" r="59" fill="#fff" />
    </clipPath>
    <g clip-path="url(#cut-off)">
      <g v-if="props.data.stripes">
        <g
          v-for="(item, index) in props.data.stripes"
          :key="'str' + index"
          transform="rotate(90, 60, 60)"
        >
          <rect
            x="0"
            :y="item.start * 1.2"
            width="120"
            :height="item.end * 1.2"
            :fill="colorFromHSL(item.color)"
            fill-opacity="0.3"
          />
        </g>
        <g
          v-for="(item, index) in props.data.stripes"
          :key="'str' + index"
          transform="rotate(0, 60, 60)"
        >
          <rect
            x="0"
            :y="item.start * 1.2"
            width="120"
            :height="item.end * 1.2"
            :fill="colorFromHSL(item.color)"
            fill-opacity="0.3"
          />
        </g>
      </g>
      <g>
        <path d="M10,120 C20,80 100,80 110,120" fill="#fff" />
        <circle cx="60" cy="60" r="29" fill="#fff" />
      </g>
    </g>
  </svg>
</template>
