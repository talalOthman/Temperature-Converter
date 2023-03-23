<script setup>
import { ref } from 'vue'

const result = ref(0)
const sign = ref('C')
</script>

<template>
    <div class="flex flex-col justify-center items-center">
        <span class="text-md md:text-lg">Result</span>
        <span class="text-5xl md:text-7xl font-bold">{{ result }} °{{ sign }}</span>
    </div>
</template>