<template>

    
    <router-view/>
    <!-- <SingUpForm /> -->

</template>

<script>
// import SingUpForm from "./components/SingUpForm.vue";

export default {
  name: "App",
  components: {
   // SingUpForm,
    ///https://preview.themeforest.net/item/sovy-restaurant-elementor-template-kit/full_screen_preview/29620214?_ga=2.60033453.1885605930.1737231182-1628758577.1737231182
  },
};
</script>
<style>
/* Ensure the body and html elements cover the full viewport */
 body {
background-image: url('./assets/png.jpg');
  margin: 0; /* Remove default margin */
  background-color: black; /* Set body background color to black */
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fafcfda1; /* This color will apply to text inside #app */
  margin-top: 60px; /* Adjust this if necessary */
}
</style>

