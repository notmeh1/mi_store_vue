<template>
  <v-app>
    <Navbar />
    <v-main>
      <router-view />
      <v-snackbar
        v-model="addCartSnackbar.snackbar"
        :timeout="addCartSnackbar.timeout"
        color="success"
        right
      >
        <v-icon class="mx-3">mdi-check</v-icon>
        {{ addCartSnackbar.text }}
      </v-snackbar>
      <v-snackbar
        v-model="delCartSnackbar.snackbar"
        :timeout="delCartSnackbar.timeout"
        color="error"
        right
      >
        <v-icon class="mx-3">mdi-alert-circle</v-icon>
        {{ delCartSnackbar.text }}
      </v-snackbar>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import { mapState } from "vuex";
import Navbar from "./components/navbar.vue";
import Footer from "./components/footer.vue";
export default {
  name: "App",

  data: () => ({
    //
  }),
  computed: {
    ...mapState(["addCartSnackbar", "delCartSnackbar"]),
  },
  components: {
    Navbar,
    Footer,
  },
};
</script>
