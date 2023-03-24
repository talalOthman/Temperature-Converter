<script setup>
import { store } from '../store'
import { defineProps } from 'vue'
defineProps(['convertTo'])
</script>

<template>
  <div class="form-control">
    <label v-if="convertTo" class="label">
      <span class="label-text">Convert To</span>
    </label>
    <label v-else class="label">
      <span class="label-text">Type</span>
    </label>
    <select
      v-if="convertTo"
      class="select select-bordered select-primary w-auto"
      v-model="store.convertToType"
    >
      <option>Celsius</option>
      <option>Fahrenheit</option>
      <option>Kelvin</option>
    </select>
    <select v-else class="select select-bordered select-primary" v-model="store.actualType">
      <option>Celsius</option>
      <option>Fahrenheit</option>
      <option>Kelvin</option>
    </select>
  </div>
</template>
