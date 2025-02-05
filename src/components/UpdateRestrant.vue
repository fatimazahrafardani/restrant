<template>
    <div class="update-restrant">
      <HeaderComponents/>
      <header>
        <h1>Update Restaurant Information</h1>
        <p>Modify the details of your restaurant below.</p>
      </header>
      <form @submit.prevent="updateRestaurant">
        <label for="name">Restaurant Name:</label>
        <input v-model="restaurant.name" type="text" id="name" required>
        <label for="address">Address:</label>
        <input v-model="restaurant.address" type="text" id="address" required>
        <label for="contact">Contact:</label>
        <input v-model="restaurant.contact" type="text" id="contact" required>
        <button type="submit">Update</button>
      </form>
      <footer>
        <p>&copy; 2025 Fatima Zahra Fardani. All rights reserved.</p>
      </footer>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import HeaderComponents from './HeaderComponents.vue';
  
  export default {
    name: 'UpdateRestrant',
    components: {
        HeaderComponents
    },
    data() {
      return {
        restaurant: {
          name: '',
          address: '',
          contact: ''
        }
      };
    },
  async mounted() {
        let userData = localStorage.getItem("user data");
        if (!userData) {
            this.$router.push({ name: 'signup' });
        } 
        else {
            this.fetchRestaurantData();
        }
        const result = await axios.get(`http://localhost:3000/restrant/${this.$route.params.id}`);
        this.restaurant = result.data;
    },
    methods: {
      fetchRestaurantData() {
           console.log('Fetching restaurant data...');
      },
      async updateRestaurant() { 
           const rst =  await axios.put(`http://localhost:3000/restrant/${this.$route.params.id}`,{
           name: this.restaurant.name,
           contact: this.restaurant.contact,
           address: this.restaurant.address,
           })
           if (rst.status==200) {
            this.$router.push({ name: 'home' });
           }
      }
    }
  }
  </script>
  <style scoped>
  .update-restrant {
    font-family: Arial, sans-serif;
    padding: 20px;
  }
  form {
    margin-top: 20px;
  }
  input, button {
    display: block;
    margin-bottom: 10px;
  }
  </style>
  