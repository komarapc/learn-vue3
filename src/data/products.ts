export type CartProps = {
  id: number;
  name: string;
  price: number;
  stock: number;
  qty: number;
};
export type Products = {
  id: number;
  name: string;
  price: number;
  stock: number;
};
export const products: Products[] = [
  {
    id: 1,
    name: "Product 1",
    price: 10000,
    stock: 10,
  },
  {
    id: 2,
    name: "Product 2",
    price: 20000,
    stock: 30,
  },
];
