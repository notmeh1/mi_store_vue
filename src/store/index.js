import Vue from "vue";
import Vuex from "vuex";
import { productsModule } from "./modules/products";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    searchInput: '',
  },
  getters: {
    searchByName(state) {
      return state.products.productList.filter((product) =>
        product.name.toLowerCase().includes(state.searchInput.toLowerCase())
      );
    },
  },
  mutations: {
    SET_FILTER(state, newFilter) {
      state.searchInput = newFilter;
    },
  },
  actions: {
    getFilter(context, newFilter) {
      context.commit("SET_FILTER", newFilter);
    },
  },
  modules: {
    products: productsModule
  },
});
