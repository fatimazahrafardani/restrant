<template>
  <div id="app" class="min-h-screen flex items-center justify-center">
    
    <router-view/>
    <!-- <SingUpForm /> -->
  </div>
</template>

<script>
// import SingUpForm from "./components/SingUpForm.vue";

export default {
  name: "App",
  // components: {
  //   SingUpForm,
  // },
};
</script>
<style>
/* Ensure the body and html elements cover the full viewport */
html, body {
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

