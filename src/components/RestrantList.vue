<template>
    <div class="home">
      <HeaderComponents/>
      <header>
        <h1>Welcome to My Restrant Page</h1>
      </header>
      <section>
        <h2>Restaurant List</h2>
        <table v-if="restaurants.length">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Address</th>
              <th>Contact</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(restaurant) in restaurants" :key="restaurant.id">
              <td>{{ restaurant.id }}</td>
              <td>{{ restaurant.name }}</td>
              <td>{{ restaurant.address }}</td>
              <td>{{ restaurant.contact }}</td>
              <td>
                <router-link :to="`/updaterest/${restaurant.id}`">Update here</router-link>
                <button @click="deleteRestaurant(restaurant.id)">Delete here</button>
              </td>
            </tr>
          </tbody>
        </table>
        <p v-else>No restaurants available.</p>
      </section>
      <footer>
        <p>&copy; 2025 Fatima Zahra Fardani. All rights reserved.</p>
      </footer>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import HeaderComponents from './HeaderComponents.vue';

  export default {
    name: 'HomePage',
    components: {
        HeaderComponents
    },
    data() {
      return {
        restaurants: []
      };
    },
   
    methods: {
      async deleteRestaurant(id) {
        try {
          await axios.delete(`http://localhost:3000/restrant/${id}`);
          alert('Restaurant deleted successfully!');
          this.loaddata();
        } catch (error) {
          console.error('Error deleting restaurant:', error);
          alert('Failed to delete restaurant.');
        }
      },
      async loaddata() {
        let userData = localStorage.getItem("user data");
        if (!userData) {
          this.$router.push({ name: 'signup' });
        }
        try {
          const result = await axios.get('http://localhost:3000/restrant');
          this.restaurants = result.data;
        }
        catch (error) {
          console.error('Error fetching restaurants:', error);
        }
      }
    },
    async mounted() {
      await this.loaddata();
    }
  }
  </script>
  <style scoped>
  button {
    margin-left: 10px;
    padding: 5px 10px;
    background-color: #ff4d4d;
    border: none;
    color: white;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #cc0000;
  }
  </style>
  