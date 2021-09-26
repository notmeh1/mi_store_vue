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
          :items="productSize"
          v-model="sizeInput"
          label="Tamaño"
          dense
          outlined
        ></v-select>
        <v-text-field
          label="Cantidad"
          v-model="qtyInput"
          hide-details
          min="1"
          max="5"
          type="number"
          class="mb-10"
        />
        <h3>Precio total: ${{ calcPrice }}</h3>
        <v-btn color="success" @click="$store.dispatch('addCart', getId.id)">Añadir al carrito</v-btn>
      </v-col>
      <v-col></v-col>
    </v-row>
  </div>
</template>

<script>
import store from "@/store";
export default {
  data: () => ({
    productSize: ["XS", "S", "M", "L", "XL"],
    sizeInput: "",
    qtyInput: 1,
  }),
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
      return this.qtyInput * this.getId.price;
    },
  },
};
</script>
