<script lang="ts" setup>
import Card from "@/components/Card.vue";
import useCartStore from "@/store/cartStore";
import NavBar from "@/components/NavBar.vue";
import { formatCurrency } from "@/utils/formatCurrency";
import { products } from "@/data/products";
import ButtonBack from "@/components/ButtonBack.vue";
import { useHead } from "@vueuse/head";

const cartStore = useCartStore();

useHead({
  title: "Products Cart",
});
</script>

<template>
  <nav-bar />
  <div class="container mx-auto p-10 font-inter">
    <button-back />
    <div class="flex gap-4 flex-wrap justify-center">
      <card v-for="product in products">
        <div class="aspect-video bg-gray-200"></div>
        <div class="p-5 text-lg font-medium border-b">
          <router-link :to="`/product/${product.id}`" class="hover:underline">
            {{ product.name }}
          </router-link>
        </div>
        <div class="p-5 flex flex-col">
          <div class="flex justify-between">
            <div class="text-lg font-medium flex flex-col">
              <span class="text-sm text-gray-500"> Price </span>
              {{ formatCurrency(product.price) }}
            </div>
            <div class="text-lg font-medium flex flex-col">
              <span class="text-sm text-gray-500"> Qty </span>
              {{ product.stock }}
            </div>
          </div>
          <div class="flex mt-2">
            <button
              class="w-full h-10 rounded-md bg-emerald-500 text-emerald-100 hover:bg-emerald-600 transition duration-200 ease-in-out"
              @click="cartStore.addCart({ ...product, qty: 1 })"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </card>
    </div>
  </div>
</template>
