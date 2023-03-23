<script setup>
import Select from './components/Select.vue'
import Text from './components/Text.vue'

</script>

<template>
  <div class="min-h-screen border flex justify-center items-center p-5">
    <div class="border w-3/4 flex flex-col p-5 gap-y-10">
      <div class="flex flex-col justify-center items-center gap-y-3">
        <Text />
        <Select />
        <button class="btn btn-primary">Convert</button>
      </div>
      <div class="flex flex-col justify-center items-center">
        <span class="text-md">Result</span>
        <span class="text-5xl">28 °C</span>
      </div>
    </div>
  </div>
</template>

