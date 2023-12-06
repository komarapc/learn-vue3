import { CartProps } from "@/data/products";
import { defineStore } from "pinia";

const useCartStore = defineStore("cart", {
  state: () => ({
    cart: [] as CartProps[],
  }),
  getters: {
    total(): undefined | number {
      return this.cart.reduce((acc, item) => acc + item.qty * item.price, 0);
    },
  },
  actions: {
    addCart(item: CartProps) {
      this.cart.push(item);
    },
    removeCart(index: number) {
      this.cart.splice(index, 1);
    },
    addQuantity(index: number) {
      this.cart[index].qty++;
    },
    reduceQuantity(index: number) {
      if (this.cart[index].qty > 1) {
        this.cart[index].qty--;
      } else {
        this.removeCart(index);
      }
    },
    changeAmount(index: number, amount: number) {
      this.cart[index].qty = amount;
    },
    clearCart() {
      this.cart = [];
    },
  },
});
export default useCartStore;
