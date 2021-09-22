<template>
  <v-row>
    <v-col>
      <v-img src="../assets/img/home-bg.png" height="1000" class="bg-hero" />
      <!-- await for img then 0.3s delay for h1 -->
      <h1 class="bg-text">Poleras</h1>
    </v-col>
  </v-row>
</template>

<style>
.bg-hero {
  filter: blur(5px);
}
.bg-text {
  color: #000000;
  border: 2px solid #000000;
  padding: 10px 10%;
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
