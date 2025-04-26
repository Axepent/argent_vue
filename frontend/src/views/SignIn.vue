<template>
    <div>
  
      <main class="form-signin w-100 m-auto py-5">
        <form @submit.prevent="handleLogin">
          <div class="d-flex flex-column align-items-center text-center mb-3">
            <img src="@/assets/images/logo.png" alt="logo" width="72" height="72">
            <h1 class="h3 fw-normal mt-2">Sign In</h1>
          </div> 
  
          <div class="form-floating">
            <input
              v-model="email"
              type="email"
              class="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              required
            />
            <label for="floatingInput">Email address</label>
          </div>
  
          <div class="form-floating">
            <input
              v-model="password"
              type="password"
              class="form-control"
              id="floatingPassword"
              placeholder="Password"
              required
            />
            <label for="floatingPassword">Password</label>
          </div>
  
          <div class="form-check text-start my-3">
            <input class="form-check-input" type="checkbox" v-model="rememberMe" id="flexCheckDefault">
            <label class="form-check-label" for="flexCheckDefault">Remember me</label>
          </div>
  
          <button class="btn btn-primary w-100 py-2" type="submit">Sign in</button>
        </form>
      </main>
  
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'SignIn',
    data() {
      return {
        email: '',
        password: '',
        rememberMe: false,
      };
    },
    methods: {
      async handleLogin() {
        try {
          const response = await axios.post('http://localhost:3000/login', {
            email: this.email,
            password: this.password,
          });
          localStorage.setItem('user', JSON.stringify(response.data.user));
          if (this.rememberMe) {
            localStorage.setItem('token', response.data.token);
          }
          if (response.data.token) {
            localStorage.setItem('token', response.data.token); 
            alert('Login successful');
            this.$router.push('/profile');
            this.$router.push('/profile');
          } 
        }
        catch (error) {
          alert('Invalid login credentials');
        }
      },
    },
  };
  </script>
  
  <style scoped>
  @import '@/assets/css/sign-in.css';
  @import '@/assets/css/main.css';
  </style>
  