<template>
  <div>
    <v-row class="my-10">
      <v-col cols="5">
        <v-card class="mx-5 mt-10">
          <v-img :src="getId.img"></v-img>
        </v-card>
      </v-col>
      <v-col>
        <h1 class="mt-10">{{ getId.name }}</h1>
        <v-select
          :items="sizeList"
          v-model="productSize"
          label="Tamaño"
          dense
          outlined
        ></v-select>
        <v-text-field
          label="Cantidad"
          v-model="productQty"
          hide-details
          min="1"
          max="5"
          type="number"
          class="mb-10"
        />
        <p v-if="getId.sale" class="discountText">Descuento: {{ getId.discount }}%</p>
        <h3>Precio total: <span v-if="getId.sale" :style="[getId.sale ? {'color' : 'red', 'font-weight' : 'bolder'} : {}]">${{calcPriceDiscount}}</span> <span :style="[getId.sale ? {'text-decoration' : 'line-through'} : {}]">${{ calcPrice}}</span></h3>
        <v-btn color="success" @click="addToCart()">Añadir al carrito</v-btn>
      </v-col>
      <v-col></v-col>
    </v-row>
  </div>
</template>

<style scoped>
.discountText {
  color: red;
}
</style>

<script>
import store from "@/store";
export default {
  data: () => ({
    sizeList: ["XS", "S", "M", "L", "XL"],
    productSize: 'XS',
    productQty: 1,
  }),
  methods: {
    addToCart() {
      this.$store.dispatch('addCart', {
        product: this.getId,
        qty: this.productQty,
        size: this.productSize,
      })
    },
  },
  computed: {
    id() {
      return this.$route.params.color;
    },
    getId() {
      return store.state.products.productList.find(
        (product) => product.name === this.id
      );
    },
    calcPrice() {
      return this.$store.state.products.newProductData.qty * this.getId.price;
    },
    calcPriceDiscount() {
      return this.$store.state.products.newProductData.qty * this.getDiscount;
    },
    getDiscount() {
      return this.getId.price - (this.getId.price * (this.getId.discount / 100))
    },
  },
};
</script>
