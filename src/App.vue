<script setup>
import Select from './components/Select.vue'
import Text from './components/Text.vue'

</script>

<template>
  <div class="min-h-screen flex flex-col justify-center items-center p-5 gap-y-5 md:gap-y-10">
    <div class="flex flex-col justify-center items-center gap-y-2">
      <h1 class="text-3xl md:text-7xl font-bold">Temperature <span class="text-primary">Converter</span></h1>
      <p class="text-xs md:text-lg">Convert temperature from one scale to another</p>
    </div>
    <div class="border border-primary w-3/4 flex flex-col p-7 gap-y-8 rounded-lg shadow-primary shadow-lg">
      <div class="flex flex-col md:flex-row justify-center items-center gap-y-3 md:gap-x-3">
        <Text />
        <Select />
        <button class="btn btn-primary mt-2 md:mt-9">Convert</button>
      </div>
      <div class="flex flex-col justify-center items-center">
        <span class="text-md">Result</span>
        <span class="text-5xl font-bold">28 °C</span>
      </div>
    </div>
  </div>
</template>

