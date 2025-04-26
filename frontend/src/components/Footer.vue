<template>
  <footer class="mt-auto py-3 custom-footer">
    <ul class="nav justify-content-center border-bottom pb-3 mb-3">
      <li class="nav-item">
        <router-link to="/" class="nav-link px-2 text-light">Home</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/about" class="nav-link px-2 text-light">About Us</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/profile" class="nav-link px-2 text-light">Profile</router-link>
      </li>
    </ul>
    <p class="text-center text-light">&copy; 2025 Argent, Inc</p>
  </footer>
</template>

<script>
export default {
  name: "FooterComponent",
};
</script>

<style scoped>
@import '@/assets/css/main.css';
</style>
