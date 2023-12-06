import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";

import Cart from "../pages/Cart.vue";
import Checkout from "../pages/Checkout.vue";
import DetailProductVue from "@/pages/products/DetailProduct.vue";
import Home from "../pages/Home.vue";
import NotFound from "@/components/NotFound.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart,
  },
  {
    path: "/checkout",
    name: "Checkout",
    component: Checkout,
  },
  {
    path: "/product/:id",
    name: "ProductDetails",
    component: DetailProductVue,
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
