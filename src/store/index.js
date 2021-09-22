import Vue from "vue";
import Vuex from "vuex";
import { productsModule } from "./modules/products";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    searchInput: '',
    // organizar productList en su propio archivo.
    
  },
  mutations: {},
  actions: {},
  modules: {
    products: productsModule
  },
});
