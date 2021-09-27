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
      text: "Agregado al carrito con exito!",
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
      this.state.addCartSnackbar.snackbar = true
    },
    //ADD_PRODUCT(state, newProduct) {
    //  //console.log(newProduct)
    //  state.cart.push(this.state.products.productList[newProduct])
    //},
    REMOVE_ITEM(state, product) {
      let productCart = state.cart.find(item => {
        return item.product.id === product.id
      });
      console.log(productCart)
      if (productCart.qty === '0') {
        state.cart = state.cart.filter(item => {
          return item.product.id !== product.id
        })
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
    removeItem({commit}, product) {
      console.log(product)
      commit("REMOVE_ITEM", product)
    }
  },
  modules: {
    products: productsModule
  },
});
