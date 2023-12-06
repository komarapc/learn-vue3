<script lang="ts" setup>
import useCartStore from "@/store/cartStore";
import PrimaryButton from "./PrimaryButton.vue";
const cartStore = useCartStore();
</script>

<template>
  <div class="w-full h-20 bg-white px-5">
    <div class="container mx-auto flex items-center justify-between h-full">
      <h1 class="text-2xl font-bold">
        <span class="text-emerald-600">VUE</span>
        APP
      </h1>
      <div class="flex items-center gap-2 justify-end">
        <router-link to="/checkout">
          <primary-button>
            <span class="text-sm text-white">Checkout</span>
            <span class="text-white">({{ cartStore.cart.length }})</span>
          </primary-button>
        </router-link>
      </div>
    </div>
  </div>
</template>
