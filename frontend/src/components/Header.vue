<template>
  <div class="container-fluid custom-header">
    <div class="d-flex flex-wrap align-items-center justify-content-between">
      <router-link to="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
        <img src="@/assets/images/logo.png" alt="logo" class="logo-img">
      </router-link>

      <ul class="nav me-auto">
        <li><router-link to="/" class="nav-link px-2 text-white">Home</router-link></li>
        <li><router-link to="/about" class="nav-link px-2 text-white">About us</router-link></li>
        <li><router-link to="/profile" class="nav-link px-2 text-white">Profile</router-link></li>
      </ul>

      <div class="text-end">
        <router-link to="/signin" class="btn btn-outline-light me-2">Sign-in</router-link>
        <router-link to="/signup" class="btn btn-primary">Sign-up</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderComponent",
};
</script>

<style scoped>
@import '@/assets/css/main.css';
</style>
