<template>
  <div>
    <v-row class="my-10">
      <v-col>
        <AddProduct />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import AddProduct from "../components/add_product.vue";
export default {
  components: {
    AddProduct,
  },
};
</script>
