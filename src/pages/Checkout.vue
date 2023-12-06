<script lang="ts" setup>
import useCartStore from "@/store/cartStore";
import NavBar from "@/components/NavBar.vue";
import Container from "@/components/Container.vue";
import { formatCurrency } from "@/utils/formatCurrency";
import PrimaryButton from "@/components/PrimaryButton.vue";
import ButtonDanger from "@/components/ButtonDanger.vue";
import ButtonBack from "@/components/ButtonBack.vue";
import { useHead } from "@vueuse/head";
const cartStore = useCartStore();
useHead({
  title: "Checkout",
});
</script>

<template>
  <nav-bar />
  <container>
    <button-back />
    <div class="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      <div
        v-for="(cart, index) in cartStore.cart"
        class="flex gap-2 bg-white shadow-md p-5"
      >
        <div class="w-20 h-20 aspect-square bg-blue-300"></div>
        <div class="flex flex-col w-96">
          <div class="text-lg font-medium">
            <router-link :to="`/product/${cart.id}`" class="hover:underline">
              {{ cart.name }}
            </router-link>
          </div>
          <div class="flex flex-col text-sm text-gray-600">
            <span> {{ formatCurrency(cart.price) }} x {{ cart.qty }} </span>
          </div>
          <div
            class="flex flex-col lg:flex-row justify-between text-lg font-medium gap-2"
          >
            <span>{{ formatCurrency(cart.qty * cart.price) }}</span>
            <div class="flex gap-1">
              <button
                class="w-8 h-8 aspect-square bg-orange-500 text-orange-100 hover:bg-orange-600 transition duration-200 ease-in-out disabled:opacity-50"
                @click="cartStore.removeCart(index)"
              >
                X
              </button>
              <button
                class="w-8 h-8 aspect-square bg-emerald-500 text-emerald-100 hover:bg-emerald-600 transition duration-200 ease-in-out disabled:opacity-50"
                @click="cartStore.reduceQuantity(index)"
                :disabled="cart.qty <= 1"
              >
                -
              </button>
              <button
                class="w-8 h-8 aspect-square bg-emerald-500 text-emerald-100 hover:bg-emerald-600 transition duration-200 ease-in-out disabled:opacity-50"
                @click="cartStore.addQuantity(index)"
                :disabled="cart.qty >= cart.stock"
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </container>
  <div class="absolute bottom-10 w-full">
    <div class="container mx-auto my-4 flex items-center justify-center gap-2">
      <button-danger
        @click="cartStore.clearCart"
        :disabled="!cartStore.cart.length"
        >Clear Cart</button-danger
      >
      <primary-button :disabled="!cartStore.cart.length"
        >Checkout</primary-button
      >
    </div>
    <div
      class="container mx-auto max-w-xl p-5 bg-white shadow-md text-center font-bold font-inter"
    >
      Total Price: {{ formatCurrency(cartStore.total || 0) }}
    </div>
  </div>
</template>
