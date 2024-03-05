<script setup>
import ProductList from "./components/ProductList.vue";
import Checkout from "./components/Checkout.vue";
</script>

<template>
  <div id="app">
    <header>
      <div class="navigation">
        <div>
          <h1 id="t">Lessons</h1>
        </div>
        <button class="b" @click="showCheckout" v-if="cartItemCount > 0">
          {{ cartItemCount }}
          <img src="https://project-env.eba-ucw3xqhp.eu-west-2.elasticbeanstalk.com/Images/basket.png"
            style="width: 30px; height: 30px;">
          <b>Basket</b>
        </button>
        <button class="b" disabled='disabled' v-else>
          {{ cartItemCount }}
          <img src="https://project-env.eba-ucw3xqhp.eu-west-2.elasticbeanstalk.com/Images/basket.png"
            style="width: 30px; height: 30px;">
          <b>Basket</b></button>
      </div>
    </header>
    <main>         
      <component :is="currentView"></component>     
     </main>
  </div>

</template>

<script>
export default {
  name: "App",
  data() {
    return {
      cart: ["ssss"],

      currentView: ProductList
    }
  },
  components: {
    ProductList,
    Checkout
  },
  methods: {
    showCheckout() {
      if (this.currentView === Checkout)
        this.currentView = ProductList
      else this.currentView = Checkout;
    }
  },
  computed: {

    cartItemCount: function () { // the property name
      // its value is calculated when it is called
      return this.cart.length || 0;
    },
    disableCart: function () {
      return this.cartItemCount > 0;
    },
  },
}
</script>


<style scoped></style>
