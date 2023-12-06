<template>
  <button-default @click="router.back()"> Back </button-default>
</template>

<script lang="ts" setup>
import ButtonDefault from "./ButtonDefault.vue";
import { useRouter } from "vue-router";

const router = useRouter();
</script>
