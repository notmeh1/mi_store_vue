import Vue from "vue";
import Vuex from "vuex";
import { productsModule } from "./modules/products";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    searchInput: '',
    cart: [
      {
        img: "https://inksoft.ugp.io/images/products/2570/products/763/Black/front/500.png?decache=760",
        type: "shirt",
        color: "black",
        size: "xl",
        qty: "3",
        price: "15000"
      },
      {
        img: "https://inksoft.ugp.io/images/products/2570/products/763/White/front/500.png?decache=633",
        type: "shirt",
        color: "white",
        size: "s",
        qty: "2",
        price: "15000"
      },
    ],
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
    CALC_PRICE(state, newPrice) {
      state.qtyInput = this.qtyInput * state.products.productList[1].price
      state.qtyInput = newPrice
    }
    //ADD_PRODUCT(state, productData) {
    //  state.cart.push(this.state.gameList[gameData]);
    //  return state.gameList[gameData].stock--;
    //},
  },
  actions: {
    getFilter(context, newFilter) {
      context.commit("SET_FILTER", newFilter);
    },
    calcPrice(context, newPrice) {
      context.commit("CALC_PRICE", newPrice)
    }
    //addCart(context, product) {
    //  context.commit("ADD_PRODUCT", game);
    //},
  },
  modules: {
    products: productsModule
  },
});
