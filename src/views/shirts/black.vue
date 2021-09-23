<template>
  <div>
    <v-row class="my-10">
      <v-col cols="5">
        <v-card class="mx-5 mt-10">
          <v-img :src="$store.state.products.productList[1].img"></v-img>
        </v-card>
      </v-col>
      <v-col>
        <h1 class="mt-10">{{ $store.state.products.productList[1].name }}</h1>
        <v-select :items="productSize" label="Tamaño" dense outlined></v-select>
        <v-text-field
          label="Cantidad"
          hide-details
          min="1"
          max="5"
          type="number"
          class="mb-10"
          value="1"
        />
        <h3>Precio total: ${{ $store.state.products.productList[1].price }}</h3>
        <v-btn color="success">Añadir al carrito</v-btn>
      </v-col>

      <v-col></v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data: () => ({
    productSize: ["XS", "S", "M", "L", "XL"],
  }),
};
</script>
