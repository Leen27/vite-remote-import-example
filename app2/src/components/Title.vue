<script setup lang="ts">
import { ref } from 'vue'
import { calcRate } from '../utils/index'
</script>

<template>
  <h1 class="title">这个标题 {{ calcRate() }}</h1>
</template>

<style scoped>
.title {
  color: #888;
  background-color: #1fbd1a;
}
</style>
