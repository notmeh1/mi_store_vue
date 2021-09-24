<template>
  <div>
    <v-row class="my-15">
      <v-col>
        <Cart :cart="this.$store.state.cart"/>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Cart from "../components/cart.vue"
export default {
  components: {
    Cart,
  }
}
</script>