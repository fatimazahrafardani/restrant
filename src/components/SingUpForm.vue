<template>
    <div class="flex-container">
      <div class="form-container">
        <img src="../assets/pngo.png" alt="Logo" class="logo" />
        <h1 class="title">Sign Up</h1>
        <form @submit.prevent="handleSubmit">
          <div class="input-container">
            <label class="label">Email</label>
            <input
              type="email"
              v-model="email"
              placeholder="Enter your email"
              class="input-field"
              required
            />
          </div>
          <div class="input-container">
            <label class="label">Password</label>
            <input
              type="password"
              v-model="password"
              placeholder="Enter your password"
              class="input-field"
              required
            />
          </div>
          <button
            type="submit"
            class="submit-btn"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "SignUpForm",
    data() {
      return {
        email: "",
        password: "",
      };
    },
    methods: {
      handleSubmit() {
        console.log("Form submitted with:", {
          email: this.email,
          password: this.password,
        });
      },
    },
  };
  </script>
  
  <style>
  /* Global styles */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: Arial, sans-serif;
    background-color: #f7fafc;
  }
  
  .flex-container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
  }
  
  .form-container {
    background-color: #fff;
    padding: 32px;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 400px;
    text-align: center;
  }
  
  .logo {
    width: 80px;
    margin-bottom: 16px;
  }
  
  .title {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 24px;
    color: #2d3748;
  }
  
  .input-container {
    margin-bottom: 16px;
  }
  
  .label {
    display: block;
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 8px;
    color: #4a5568;
  }
  
  .input-field {
    width: 100%;
    padding: 12px;
    font-size: 16px;
    border: 1px solid #e2e8f0;
    border-radius: 6px;
    outline: none;
    color: #4a5568;
    transition: border 0.2s;
  }
  
  .input-field:focus {
    border-color: #3182ce;
    box-shadow: 0 0 0 2px rgba(56, 161, 255, 0.5);
  }
  
  .submit-btn {
    width: 100%;
    padding: 12px;
    font-size: 16px;
    background-color: #600000;
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: background-color 0.2s;
  }
  
  .submit-btn:hover {
    background-color: #760101;
  }
  
  .submit-btn:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(56, 161, 255, 0.5);
  }
  </style>
  