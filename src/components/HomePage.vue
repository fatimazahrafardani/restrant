<template>
  <div class="home">
    <HeaderComponents/>
    <header>
      <h1>Welcome to My Home Page</h1>
      <p>This is a simple Vue.js home component template.</p>
    </header>

    <footer>
      <p>&copy; 2025 Fatima Zahra Fardani. All rights reserved.</p>
    </footer>
  </div>
</template>

<script>
import HeaderComponents from './HeaderComponents.vue';

export default {
  name: 'HomePage',
  components: {
      HeaderComponents
  },
  mounted() {
      let userData = localStorage.getItem("user data");
      if (!userData) {
          this.$router.push({ name: 'signup' }); // Fixed the typo from 'singup' to 'signup'
      }
  }
}
</script>
