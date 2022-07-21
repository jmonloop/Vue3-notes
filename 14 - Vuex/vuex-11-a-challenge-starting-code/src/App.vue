<template>
  <the-header></the-header>
  <router-view></router-view>
</template>

<script>
import TheHeader from './components/nav/TheHeader.vue';

export default {
  components: {
    TheHeader,
  },
  // data() {
  //   return {
  //     isLoggedIn: this.$store.getters.isAuth,
  //     products: this.$store.getters.products,
  //     cart: this.$store.getters.cart,
  //   };
  // },
  // provide() {
  //   return {
  //     isLoggedIn: this.isLoggedIn,
  //     products: this.products,
  //     cart: this.cart,

  //     addProductToCart: this.addProductToCart,
  //     removeProductFromCart: this.removeProductFromCart,
  //     login: this.login,
  //     logout: this.logout,
  //   };
  // },
  // methods: {
  //   addProductToCart(productData) {
  //     this.$store.dispatch('addProductToCart', productData);
  //   },

  //   removeProductFromCart(prodId) {
  //     this.$store.dispatch('removeProductFromCart', prodId);
  //   },
  //   login() {
  //     this.$store.dispatch('login');
  //   },
  //   logout() {
  //     this.$store.dispatch('logout');
  //   },
  // },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
