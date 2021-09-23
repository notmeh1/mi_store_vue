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
    path: "/products/black",
    name: "blackshirt",
    component: () => import("../views/shirts/black.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
