<script setup>
import { ref } from 'vue'

const type = ref('Celsius')
</script>

<template>
    <div class="form-control w-full max-w-xs">
        <label class="label">
            <span class="label-text">Type</span>
        </label>
        <select class="select select-bordered select-primary" v-model="type">
            <option>Celsius</option>
            <option>Fahrenheit</option>
            <option>Kelvin</option>
        </select>
    </div>
</template>