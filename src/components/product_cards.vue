<template>
  <v-row class="my-10 mx-3">
    <v-col v-for="(product, $index) in productList" :key="$index" cols="3">
      <v-card class="mx-auto" max-width="250px" tile>
        <v-img :src="product.img" height="200px"/>

        <v-card-title> {{ product.name }} </v-card-title>

        <v-card-subtitle>
          Stock disponible: {{ product.stock }}
        </v-card-subtitle>

        <div class="text-center">
          <v-divider></v-divider>

        <router-link :to="{path: `/products/shirts/${product.name}`, params: {id: product.name}}"> {{product.name}}</router-link>
        </div>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import {mapState} from 'vuex';
export default {
  computed: {
    ...mapState(["products/productList"]),
    //productData() {
    //  return this.$store.state.products.productList;
    //},
  },
  props: {
    productList: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>

</style>