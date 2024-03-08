<script setup>
import ProductList from "./components/ProductList.vue";
import Checkout from "./components/Checkout.vue";
import test_console from "./components/testconcole.vue";
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
      <test-component v-if="currentView == ProductList" :lessons="lessons"></test-component>
      <component :is="currentView" :lessons="lessons" :cart="cart" @add-item="addItem" @remove-Item="removeItem">
      </component>
    </main>
  </div>

</template>

<script>
export default {
  name: "App",
  data() {
    return {
      currentView: ProductList,
      lessons: [],
      cart: [],
    }
  },
  components: {
    ProductList,
    Checkout,
    'test-component': test_console,
  },
  created: function () {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("service-worker.js");
    };
  },
  methods: {
    showCheckout() {
      if (this.currentView === Checkout)
        this.currentView = ProductList
      else this.currentView = Checkout;
    },
    addItem(lesson) {
      this.cart.push(lesson);
      const index = this.lessons.findIndex(item => item._id === lesson._id);
      this.lessons[index].spaces -= 1;
    },
    removeItem(lesson) {

      // Find the index of the product in the cart array
      const index = this.lessons.findIndex(item => item._id === lesson._id);
      const index2 = this.cart.findIndex(item => item._id === lesson._id);
      this.lessons[index].spaces += 1;

      // Remove the product from the cart array using the index
      if (index2 !== -1) {
        this.cart.splice(index2, 1);
      }
      if (this.cart.length === 0) {
        this.currentView = ProductList;
      }
    },
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
  mounted() {
    // Fetch lessons data from an external JSON file using Fetch API
    fetch('https://project-env.eba-ucw3xqhp.eu-west-2.elasticbeanstalk.com/lessons')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        // Assign the fetched data to the Vue instance's data property
        this.lessons = data;
      })
      .catch(error => {
        console.error('Error fetching lessons:', error);
      });
  },
}
</script>

<style scoped></style>
