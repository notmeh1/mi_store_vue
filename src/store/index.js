import Vue from "vue";
import Vuex from "vuex";
import { productsModule } from "./modules/products";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    searchInput: '',
    cart: [

    ],
    addCartSnackbar: {
      snackbar: false,
      text: "test",
      timeout: 2500,
    },
  },
  getters: {
    searchByName(state) {
      return state.products.productList.filter((product) =>
        product.name.toLowerCase().includes(state.searchInput.toLowerCase())
      );
    },
    productTotal(state) {
      return state.cart.reduce((accumulator, product) => {
        accumulator += product.product.price * (1 - product.product.discount / 100) * product.qty
        return accumulator
      }, 0)
    }
  },
  mutations: {
    SET_FILTER(state, newFilter) {
      state.searchInput = newFilter;
    },
    ADD_CART(state, {product, qty}) {
      let productCart = state.cart.find(item => {
        return item.product.id === product.id
      });

      if (productCart) {
        productCart.qty += qty;
        return
      }
      state.cart.push({
        product,
        qty
      })
    },
    //ADD_PRODUCT(state, newProduct) {
    //  //console.log(newProduct)
    //  state.cart.push(this.state.products.productList[newProduct])
    //},
    WATCH_QTY(state, product) {
      if (state.cart[product].qty === 0) {
        state.cart.splice(1, product)
        console.log("se borro de la pagina", product)
      }
    },
  },
  actions: {
    getFilter(context, newFilter) {
      context.commit("SET_FILTER", newFilter);
    },
    addCart({commit}, {product, qty}) {
      commit('ADD_CART', {product, qty})
    },
    watchQty(context, product) {
      console.log(product)
      context.commit("WATCH_QTY", product)
    }
  },
  modules: {
    products: productsModule
  },
});
