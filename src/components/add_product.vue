<template>
  <v-row class="my-10">
    <v-col></v-col>
    <v-col cols="7">
      <v-form ref="form" v-model="valid">
        <v-select
          v-model="product.type"
          :items="products"
          :rules="[(v) => !!v || 'Por favor elige una categoría']"
          label="Categoría"
          required
        ></v-select>

        <v-text-field
          v-model="product.name"
          :counter="10"
          :rules="[(v) => !!v || 'Por favor escribe el color del producto']"
          label="Color"
          required
        ></v-text-field>

        <v-text-field
          v-model="product.img"
          :rules="[(v) => !!v || 'Por favor escribe la url de la imagen']"
          label="Url de la imagen"
          required
        ></v-text-field>

        <v-text-field
          v-model="product.stock"
          type="number"
          :counter="3"
          :rules="[(v) => !!v || 'Por favor escribe la cantidad de stock']"
          label="Stock"
          required
        ></v-text-field>

        <v-text-field
          v-model="product.price"
          type="number"
          :counter="10"
          :rules="[(v) => !!v || 'Por favor escribe el precio del producto']"
          label="Precio"
          required
        ></v-text-field>

        <v-select
          v-model="product.sale"
          :items="saleItem"
          label="Esta en oferta?"
        ></v-select>

        <v-text-field
          v-if="product.sale"
          required
          v-model="product.discount"
          :rules="[(v) => !!v || 'Por favor escribe el descuento']"
          type="number"
          :counter="3"
          label="Descuento"
        ></v-text-field>

        <v-btn
          :disabled="!valid"
          color="success"
          class="mr-4"
          @click="addProduct"
        >
          Agregar producto
        </v-btn>

        <v-btn color="error" class="mr-4" @click="reset">
          Limpiar formulario</v-btn
        >
      </v-form>
    </v-col>
    <v-col></v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    products: ["shirt", "pants"],
    saleItem: [
      {
        text: "Si",
        value: true,
      },
      {
        text: "No",
        value: false,
      },
    ],
    checkbox: false,
    product: {
      id: null,
      img: null,
      type: null,
      name: null,
      stock: null,
      price: null,
      sale: false,
      discount: null,
    },
  }),
  mounted() {
    let newId = this.$store.state.products.productList.at(-1).id;
    newId++;
    this.product.id = newId;
    console.log(newId);
  },
  methods: {
    reset() {
      this.$refs.form.reset();
    },
    addProduct() {
      this.$store.state.products.productList.push(this.product);
      console.log(this.$store.state.products.productList);
    },
  },
};
</script>
