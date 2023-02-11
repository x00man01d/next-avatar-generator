<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { randomAvatar } from '@/modules/avatar'
import SvgPic from '@/components/userPic/SvgPic.vue'

onMounted(() => {
  refreshAvatars(9)
})
const data = ref<UserPic[] | undefined>(undefined)

const refreshAvatars = (quantity: number) => {
  const newArray = []
  for (let i = 0; i < quantity; i++) {
    newArray.push(randomAvatar())
  }
  data.value = newArray
}
</script>

<template>
  <div class="playground">
    <div class="control">
      <button class="btn" @click="refreshAvatars(9)">Refresh</button>
    </div>
    <div class="result">
      <div v-for="(item, index) in data" :key="index">
        <SvgPic :data="item" :size="120" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.playground {
  padding: 2rem 0;
  text-align: center;
}
.control {
  padding-bottom: 2rem;
}
.result {
  text-align: center;
  padding-bottom: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}
</style>
