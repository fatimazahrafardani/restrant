<template>
    <div class="add-restrant">
      <header>
        <h1>Add New Restaurant</h1>
        <p>Fill in the details of your new restaurant below.</p>
      </header>
      <HeaderComponents/>
      <form @submit.prevent="addRestaurant">
        <label for="name">Restaurant Name:</label>
        <input v-model="restaurant.name" type="text" id="name" required>

   <label for="contact">Contact:</label>
        <input v-model="restaurant.contact" type="text" id="contact" required>
        
        <label for="address">Address:</label>
        <input v-model="restaurant.address" type="text" id="address" required>
  
       
  
        <button type="submit">Add Restaurant</button>
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
    name: 'AddRestrant',
    components: {
        HeaderComponents
    },
    data() {
      return {
        restaurant: {
          name: '',
          contact: '',
          address: '',
          
        }
      };
    },
   
    methods: {
      addRestaurant() {
        console.warn(this.restaurant)
        axios.post('http://localhost:3000/restrant',{
           name: this.restaurant.name,
           contact: this.restaurant.contact,
           address: this.restaurant.address,

        })
        alert('Restaurant added successfully!');
      }
    }
    
}
</script>

<style scoped>
.add-restrant {
    font-family: 'Poppins', sans-serif;
    padding: 20px;
    max-width: 600px;
    margin: 0 auto;
    background: #f9f9f9;
    border-radius: 10px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
}

header {
    text-align: center;
    margin-bottom: 20px;
}

form {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

input {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
}

button {
    padding: 10px;
    background: #4CAF50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    transition: background 0.3s ease;
}

button:hover {
    background: #45a049;
}

footer {
    text-align: center;
    margin-top: 20px;
    font-size: 14px;
    color: #777;
}
</style>
