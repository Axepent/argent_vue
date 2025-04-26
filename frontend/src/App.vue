<template>
    <HeaderComponent />
    <router-view />
    <FooterComponent />
  </template>
  
  <script>
  import HeaderComponent from "@/components/Header.vue";
  import FooterComponent from "@/components/Footer.vue";
  
  export default {
    components: {
      HeaderComponent,
      FooterComponent,
    },
  };
  </script>
  
  <style scoped>
  @import './assets/css/main.css';
  </style>
  