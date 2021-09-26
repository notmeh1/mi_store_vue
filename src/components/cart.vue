<template>
  <div>
      <v-row class="mx-10 my-2">
        <v-col align=center>
          <h1 v-if="$store.state.cart.length === 0">El carrito está vacio!</h1>
        </v-col>
      </v-row>
    <v-card
      class="mx-10 my-2"
      tile
      outlined
      v-for="(item, $index) in cart"
      :key="$index"
    >
      <template>
        <v-container>
          <v-row>
            <v-col cols="2">
              <v-img :src="item.img" max-width="200px" />
            </v-col>
            <v-col cols="4">
              <h1 class="pa-2" flat>Color: {{ item.name }}</h1>
              <h4 class="pa-2" flat>Tamaño: {{ item.size }}</h4>
            </v-col>
            <v-col cols="4" class="d-flex align-center">
              <v-card class="d-flex align-center" width="300px" flat>
                <v-btn color="success"><v-icon>mdi-plus</v-icon></v-btn>
                <v-text-field
                  label="Cantidad"
                  filled
                  value="1"
                  hide-details
                  min="1"
                  max="5"
                  type="number"
                  class="mb-10 mx-3 my-4"
                />
                <v-btn color="error"><v-icon>mdi-minus</v-icon></v-btn>
              </v-card>
            </v-col>
            <v-col cols="2" class="d-flex align-center justify-center">
              <h2>Precio: ${{ item.price }}</h2>
            </v-col>
          </v-row>
        </v-container>
      </template>
    </v-card>
  </div>
</template>

<script>
export default {
  computed: {
    getProduct() {
      return this.$store.state.cart;
    },
  },
  props: {
    cart: {
      type: Array,
      required: true,
    },
  },
};
</script>
