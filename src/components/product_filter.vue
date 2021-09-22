<template>
  <v-card class="ml-7 my-10" width="100%">
    <v-card-title>Filtrar productos</v-card-title>

    <div>
      <v-icon class="ml-2">mdi-magnify</v-icon>
      <input
        type="text"
        class="inputSearch mx-3"
        placeholder="Buscar por color"
        :value="$store.state.searchInput"
      />
    </div>
    <v-divider horizontal class="mt-5"></v-divider>
    <v-row class="mx-5 my-3">
        <v-card-text align=center>Filtrar por precio</v-card-text>
        <v-col>
            <input type="number" class="inputSearch" placeholder="min" min="0" max="30000" step="500" value="0">
        </v-col>
        <v-col>
            <input type="number" class="inputSearch" placeholder="max" min="0" max="30000" step="500" value="30000">
        </v-col>
    </v-row>

    <v-divider class="mx-4"></v-divider>
  </v-card>
</template>

<style scoped>
.inputSearch {
  width: 80%;
  border-bottom: 1px solid #000000;
}
.inputSearch:focus {
  outline: none;
}
</style>
