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

          <v-btn class="my-2" color="success" :to="{ name: 'blackshirt' }"
            >${{ product.price }}</v-btn
          >
        </div>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  computed: {
    productData() {
      return this.$store.state.products.productList;
    },
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