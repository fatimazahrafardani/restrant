<template>
  
  <div class="home" >
   <img src="/src/assets/ana.jpg" alt=""> 
    <HeaderComponents/>
    <nav>
      <h1>Welcome to My Home Page</h1>
      <p>This is a simple Vue.js home component template.</p>
    </nav>

   
    <footer class="footer">
      <p>&copy; 2025 Fatima Zahra Fardani. All rights reserved.</p>
    </footer>
  </div>
</template>

<script>
// Import statements remain unchanged
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
        this.loaddata();  // Reload the list after deletion
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
      } catch (error) {
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
.home {
  display: flex;
  flex-direction: column; /* Stack children vertically */
  min-height: 100vh; /* Ensure it takes at least full viewport height */
  

}

header {
  flex: 2; /* Allow header to grow and take available space */
}

.footer {
  text-align: center; /* Center text in footer */
  padding: 10px; /* Add some padding */
  color: white; /* Set footer text color */
}

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
