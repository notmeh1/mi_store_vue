<template>
  <v-app>
    <Navbar/>
    <v-main>
      <router-view />
    </v-main>
    <Footer/>
  </v-app>
</template>

<script>
import Navbar from "./components/navbar.vue"
import Footer from "./components/footer.vue"
export default {
  name: "App",

  data: () => ({
    //
  }),
  components: {
    Navbar,
    Footer,
  }
};
</script>
