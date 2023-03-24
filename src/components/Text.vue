<script setup>
import { store } from '../store'
</script>

<template>
  <div class="form-control w-full max-w-xs">
    <label class="label">
      <span class="label-text">Value</span>
    </label>
    <input
      v-model="store.degree"
      type="text"
      placeholder="Type here"
      class="input input-bordered input-primary w-full max-w-xs"
    />
  </div>
</template>
