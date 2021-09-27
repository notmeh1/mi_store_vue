<template>
  <div>
    <v-app-bar flat dense color="transparent" fixed light>
      <v-app-bar-title><h3 class="nav-title">Poleras</h3></v-app-bar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn text :to="{ name: 'home' }"> Inicio </v-btn>

        <v-btn text :to="{ name: 'products' }"> Productos </v-btn>

        <v-btn color="success" tile icon :to="{ name: 'cart' }"
          ><v-icon>mdi-cart</v-icon></v-btn
        >
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <v-btn
        v-if="isProducts"
        color="success"
        tile
        text
        :to="{ name: 'newproduct' }"
        ><v-icon>mdi-plus-circle-outline</v-icon>Agregar Producto</v-btn
      >
    </v-app-bar>
  </div>
</template>

<script>
export default {
  computed: {
    isProducts() {
      return this.$route.name === "products";
    },
  },
};
</script>

<style scoped>
.nav-title {
  padding: 1px 1em;
  border: 2px solid #000000;
}
</style>
