<template>
    <div>
  
      <main class="py-5">
        <div class="profile-container text-center">
          <img src="@/assets/images/logo.png" alt="logo" width="72" height="72">
          <div class="profile-header d-flex justify-content-center align-items-center gap-4 my-3">
            <img src="@/assets/images/WingsLeft.PNG" alt="Left Icon" class="profile-icon">
            <h2 class="mb-0">Profile</h2>
            <img src="@/assets/images/WingsRigth.PNG" alt="Right Icon" class="profile-icon">
          </div>
  
          <table class="table mt-4">
            <tbody>
              <tr>
                <th>First Name</th>
                <td>{{ user.name }}</td>
              </tr>
              <tr>
                <th>Last Name</th>
                <td>{{ user.surname }}</td>
              </tr>
              <tr>
                <th>Nickname</th>
                <td>{{ user.nickname }}</td>
              </tr>
              <tr>
                <th>Date of Birth</th>
                <td>{{ user.birthDay }}/{{ user.birthMonth }}/{{ user.birthYear }}</td>
              </tr>
              <tr>
                <th>Email</th>
                <td>{{ user.email }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
  
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'Profile',
    data() {
      return {
        user: {},
      };
    },
    mounted() {
    this.loadProfile();
  },
  methods: {
    async loadProfile() {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          alert('You are not logged in');
          this.$router.push('/signin');
          return;
        }

        const response = await axios.get('http://localhost:3000/profile', {
          headers: {
            'x-access-token': token
          }
        });

        this.user = response.data;
      } catch (error) {
        console.error('Profile error:', error);
        alert('Failed to load profile');
        this.$router.push('/signin');
      }
    }
  }
  };
  </script>
  
  <style scoped>
  @import '@/assets/css/profile.css';
  </style>