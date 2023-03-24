<script setup>
import { store } from '../store'
</script>

<template>
  <div class="flex flex-col justify-center items-center">
    <span class="text-md md:text-lg">Result</span>
    <span class="text-5xl md:text-7xl font-bold">{{ store.result }} °{{ store.sign }}</span>
  </div>
</template>
