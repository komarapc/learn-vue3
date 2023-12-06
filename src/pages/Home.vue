<script lang="ts" setup>
import { useCounterStore } from "@/store/counterStore";
const counterStore = useCounterStore();

console.log(counterStore.count);
</script>

<template>
  <div class="container mx-auto p-10 font-inter">
    <h1 class="text-xl">Homepage</h1>
    <button
      @click="counterStore.increment()"
      class="px-6 py-3 bg-blue-500 text-blue-100 rounded"
    >
      Count: {{ counterStore.count }}
    </button>
    <div>
      <router-link to="/cart">Cart</router-link>
    </div>
  </div>
</template>
