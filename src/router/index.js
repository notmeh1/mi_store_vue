import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    alias: ["/home"],
    component: () => import("../views/home.vue")
  },
  {
    path: "/products",
    name: "products",
    component: () => import("../views/products.vue")
  },
  {
    path: "/cart",
    name: "cart",
    component: () => import("../views/cart_view.vue")
  },
  {
    path: "/products/shirts/:color",
    name: "shirt",
    component: () => import("../views/shirts.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
