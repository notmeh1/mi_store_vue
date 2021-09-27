<template>
  <v-row class="my-10 mx-3">
    <v-col v-for="(product, $index) in productList" :key="$index" cols="3">
      <router-link
        style="text-decoration: none; color: inherit"
        :to="{
          path: `/products/shirts/${product.name}`,
          params: { id: product.name },
        }"
      >
        <v-card class="mx-auto" max-width="250px" tile>
          <v-img :src="product.img" height="200px" />

          <v-card-title> {{ product.name }} </v-card-title>

          <v-card-subtitle>
            Stock disponible: {{ product.stock }}
          </v-card-subtitle>
          <v-divider></v-divider>
          <v-card-subtitle class="font-weight-black text-center">
            <h3>${{ product.price }}</h3>
          </v-card-subtitle>
        </v-card>
      </router-link>
    </v-col>
  </v-row>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["products/productList"]),
  },
  props: {
    productList: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped></style>
