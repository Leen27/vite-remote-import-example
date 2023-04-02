<script setup lang="ts">
import { ref } from 'vue'
import { calcRate } from '../utils/index'
import { counterState } from '../stores/counter';
// defineProps<{ msg: string }>()

const coutner = counterState()
</script>

<template>
  <div class="content">这个是子系统1111222 {{ calcRate() }}</div>
  <div>{{ coutner.count }}</div>
  <div><button @click=coutner.increase()>increase</button></div>
</template>

<style scoped>
.content {
  color: #888;
  background-color: blueviolet;
}
</style>
