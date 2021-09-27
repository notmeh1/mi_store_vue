import Vue from "vue";
import Vuex from "vuex";
import { productsModule } from "./modules/products";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    searchInput: '',
    cart: [

    ],
  },
  getters: {
    searchByName(state) {
      return state.products.productList.filter((product) =>
        product.name.toLowerCase().includes(state.searchInput.toLowerCase())
      );
    },
    productTotal(state) {
      return state.cart.reduce((accumulator, product) => {
        accumulator += product.price * (1 - product.discount / 100) * product.qty
        return accumulator
      }, 0)
    }
  },
  mutations: {
    SET_FILTER(state, newFilter) {
      state.searchInput = newFilter;
    },
    ADD_CART(state, product) {
      state.cart.push(this.state.products.productList[product]);
      console.log(this.state.cart[product], product)
      // wip
      //state.cart[product].size = this.state.products.newProductData.size
      //state.cart[product].qty = this.state.products.newProductData.qty
    },
    //ADD_PRODUCT(state, newProduct) {
    //  //console.log(newProduct)
    //  state.cart.push(this.state.products.productList[newProduct])
    //},
    ADD_QTY(state, index) {
      state.cart[index].qty++
    },
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
    addCart(context, product) {
      let index = context.state.cart.findIndex(
        (cartProduct) => cartProduct.id === product.id
      )
      // hay que terminar
      console.log(index, product)
      if (index === -1) {
        //state.cart.push(this.state.products.productList[productData]);
        //state.cart.at(-1).size = this.state.products.newProductData.size
        //state.cart.at(-1).qty = this.state.products.newProductData.qty
        //console.log("producto: ",product)
        //
        // eslint-disable-next-line
        
        console.log(product)
        context.commit("ADD_CART", product)
      } else {
        context.commit("ADD_QTY", index)
      }
      //context.commit("ADD_CART", product)
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
