<template>
  <div>
    <v-row class="mx-10 my-2">
      <v-col align="center">
        <h1 v-if="$store.state.cart.length === 0">El carrito está vacio!</h1>
      </v-col>
    </v-row>
    <v-card
      class="mx-10 my-2"
      tile
      outlined
      v-for="item in cart" :key="item.product.id"
    >
      <template>
        <v-container>
          <v-row>
            <v-col cols="2">
              <v-img :src="item.product.img" max-width="200px" />
            </v-col>
            <v-col cols="4">
              <h1 class="pa-2" flat>Color: {{ item.product.name }}</h1>
              <h4 class="pa-2" flat>Tamaño: {{ item.size }}</h4>
              <v-card class="d-flex align-center" width="300px" flat>
                <v-text-field
                  label="Cantidad"
                  v-model="item.qty"
                  @input="$store.dispatch('removeItem', item.product)"
                  filled
                  value="1"
                  hide-details
                  min="0"
                  max="5"
                  type="number"
                  class="mb-10 mx-3 my-4"
                />
              </v-card>
            </v-col>
            <v-col></v-col>
          </v-row>
        </v-container>
      </template>
    </v-card>
    <v-row v-if="$store.state.cart.length > 0">
      <v-col align="center">
        <h1>Total: $ {{ getTotal }}</h1>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  computed: {
    getProduct() {
      return this.$store.state.cart;
    },
    getTotal() {
      return this.$store.getters.productTotal;
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
