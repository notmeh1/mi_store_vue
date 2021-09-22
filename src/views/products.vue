<template>
  <div>
    <v-row class="my-10">
      <v-col cols="3">
        <v-row class="my-10">
          <FilterSearch />
        </v-row>
      </v-col>
      <v-col cols="9">
        <v-row class="my-10">
          <Cards :productList="$store.getters.searchByName" />
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Cards from "../components/product_cards.vue";
import FilterSearch from "../components/product_filter.vue";

export default {
  components: {
    Cards,
    FilterSearch,
  },
};
</script>
<style scoped></style>
