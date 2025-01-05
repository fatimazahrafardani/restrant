<template>
    <div class="home">
      <header>
        <h1>Welcome to My Home Page</h1>
        <p>This is a simple Vue.js home component template.</p>
      </header>
  
      <!-- <section class="features">
        <div class="feature-card" v-for="(feature, index) in features" :key="index">
          <h3>{{ feature.title }}</h3>
          <p>{{ feature.description }}</p>
        </div>
      </section> -->
  
      <footer>
        <p>&copy; 2025 Fatima Zahra Fardani. All rights reserved.</p>
      </footer>
    </div>
  </template>
  
  <script>
  export default {
    name:'HomePage',
    
    
    
    mounted(){
      let userData = localStorage.getItem("user data")
      if(!userData){
        this.$router.push({name:'singup'})
        }
    }

    
    }

  </script>
  
  <style scoped>
  .home {
    text-align: center;
    font-family: Arial, sans-serif;
    padding: 2rem;
  }
  
  header h1 {
    color: #3498db;
  }
  
  .features {
    display: flex;
    justify-content: space-around;
    margin: 2rem 0;
  }
  
  .feature-card {
    border: 1px solid #ddd;
    padding: 1rem;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
  }
  
  footer {
    margin-top: 2rem;
    font-size: 0.9rem;
    color: #555;
  }
  </style>
  