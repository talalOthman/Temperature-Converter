<script setup>
import { ref } from 'vue'

const degree = ref()
</script>

<template>
    <div class="form-control w-full max-w-xs">
        <label class="label">
            <span class="label-text">Degree</span>
        </label>
        <input v-model="degree" type="text" placeholder="Type here" class="input input-bordered input-primary w-full max-w-xs" />
    </div>
</template>