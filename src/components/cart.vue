<template>
  <div>
    <v-card
      class="mx-10 my-2"
      tile
      v-for="(item, $index) in cart"
      :key="$index"
    >
      <v-list-item>
        <v-list-item-content>
            <v-list-item-avatar>

            <v-img :src="item.img" height="200px"/>
            </v-list-item-avatar>
          <v-list-item-title>{{item.type}}</v-list-item-title>
          <v-list-item-title>{{item.color}}</v-list-item-title>
          <v-list-item-title>{{item.size}}</v-list-item-title>
          <v-list-item-title>{{item.qty}}</v-list-item-title>
          <v-list-item-title>{{item.price}}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
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
