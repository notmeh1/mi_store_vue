<template>
  <div>
    <v-app-bar flat dense color="transparent" fixed light>
      <v-app-bar-title><h3 class="nav-title">Poleras</h3></v-app-bar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn text :to="{ name: 'home' }"> Inicio </v-btn>

        <v-btn text :to="{ name: 'products' }"> Productos </v-btn>
      </v-toolbar-items>

      <v-btn color="success" tile icon><v-icon>mdi-cart</v-icon></v-btn>

      <v-spacer></v-spacer>
    </v-app-bar>
  </div>
</template>

<style scoped>
.nav-title {
  padding: 1px 1em;
  border: 2px solid #000000;
}
</style>
