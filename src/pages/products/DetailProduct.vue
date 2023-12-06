<template>
  <vue-meta>
    <title>Detail Product</title>
  </vue-meta>
  <nav-bar />
  <not-found v-if="!findProduct" />
  <container v-else>
    <button-back />
    <card class="w-full p-5">
      <div class="flex flex-col lg:flex-row gap-4">
        <div class="w-60 h-60 aspect-square bg-gray-200"></div>
        <div class="flex flex-col gap-2">
          <h1 class="text-lg font-bold uppercase text-gray-500">
            {{ findProduct.name }}
          </h1>
          <div class="text-2xl font-bold text-gray-800">
            {{ formatCurrency(findProduct.price) }}
          </div>
          <div class="text-gray-500">
            Aliquip occaecat consequat non elit exercitation mollit veniam ut
            sint dolore. Esse veniam id ipsum non sint exercitation aliqua
            commodo est exercitation do enim. Cupidatat do occaecat laborum sunt
            fugiat ipsum proident reprehenderit ut do ullamco culpa consequat
            est. Fugiat magna consectetur laborum aliqua duis ut id aliquip
            fugiat eu pariatur ad eu consequat.
          </div>
          <div class="flex flex-col">
            <span class=""> {{ findProduct.stock }} left in stock </span>
            <div>
              <primary-button
                @click="cartStore.addCart({ ...findProduct, qty: 1 })"
                :disabled="findProduct.stock <= 0"
              >
                Add to Cart
              </primary-button>
            </div>
          </div>
        </div>
      </div>
    </card>
  </container>
</template>

<script setup lang="ts">
import NavBar from "@/components/NavBar.vue";

// catch params from router
import { useRoute } from "vue-router";
import { products } from "@/data/products";
import NotFound from "@/components/NotFound.vue";
import Container from "@/components/Container.vue";
import Card from "@/components/Card.vue";
import { formatCurrency } from "@/utils/formatCurrency";
import useCartStore from "@/store/cartStore";
import PrimaryButton from "@/components/PrimaryButton.vue";
import ButtonBack from "@/components/ButtonBack.vue";
import VueMeta from "vue-meta";
import { useHead } from "@vueuse/head";

const route = useRoute();
const cartStore = useCartStore();

const findProduct = products.find(
  (item) => String(item.id) === String(route.params.id)
);

useHead({
  title: findProduct?.name || "Detail Product",
});
</script>
