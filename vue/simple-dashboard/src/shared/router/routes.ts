export const ROUTES = {
  home: {
    name: "home",
    path: "/",
    component: import("../../features/home/views/HomeView.vue"),
  },
  product: {
    name: "products",
    path: "/products",
    component: import("../../features/products/views/ProductView.vue"),
  },
};
