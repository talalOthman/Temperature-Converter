<script setup>
import Select from './components/Select.vue'
import Text from './components/Text.vue'
import Result from './components/Result.vue'
import { store } from './store'
</script>

<template>
  <div class="h-screen flex flex-col justify-center items-center p-5 gap-y-5 md:gap-y-10" style="@supports (-webkit-touch-callout: none) {
    .h-screen {
      height: -webkit-fill-available;
    }
  }">
    <div class="flex flex-col justify-center items-center gap-y-2">
      <div class="flex flex-col items-center md:flex-row md:gap-x-3">
        <h1 class="text-4xl md:text-7xl font-bold">Temperature</h1>
        <span class="text-4xl md:text-7xl font-bold text-primary">Converter</span>
      </div>
      <p class="text-xs md:text-lg">Convert temperature from one scale to another</p>
    </div>
    <div
      class="border border-primary w-4/4 md:w-3/4 flex flex-col p-7 gap-y-8 rounded-lg shadow-primary shadow-md items-center">
      <div class="flex justify-center items-center gap-x-3">
        <Text />
        <Select :type="store.firstType" />
      </div>
      <div class="flex w-full justify-center">
        <Select :type="store.secondType" :convertTo="true" class="w-60" />
      </div>
      <button @click="store.convert" class="btn btn-primary">Convert</button>
      <Result />
    </div>
  </div>
</template>


