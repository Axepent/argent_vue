<template>
  <main class="form-signup">
    <form @submit.prevent="registerUser">
      <div class="d-flex align-items-center mb-3">
        <img src="@/assets/images/logo.png" alt="logo" width="72" height="72" class="me-2" />
        <h1 class="h3 fw-normal mb-0">Sign Up</h1>
      </div>

      <div class="row g-2">
        <div class="col">
          <div class="form-floating">
            <input v-model="name" type="text" class="form-control" id="name" placeholder="Name" required>
            <label for="name">Name</label>
          </div>
        </div>
        <div class="col">
          <div class="form-floating">
            <input v-model="surname" type="text" class="form-control" id="surname" placeholder="Surname" required>
            <label for="surname">Surname</label>
          </div>
        </div>
      </div>

      <div class="form-floating mt-2">
        <input v-model="nickname" type="text" class="form-control" id="nickname" placeholder="Nickname" required>
        <label for="nickname">Nickname</label>
      </div>

      <div class="mt-2">
        <label class="dob-label">Date of Birth</label>
        <div class="row g-2">
          <div class="col">
            <select v-model="day" class="form-select" id="dob-day" required>
              <option disabled value="">Day</option>
              <option v-for="n in 31" :key="n" :value="n">{{ n }}</option>
            </select>
          </div>
          <div class="col">
            <select v-model="month" class="form-select" id="dob-month" required>
              <option disabled value="">Month</option>
              <option v-for="(monthName, index) in months" :key="index" :value="index + 1">{{ monthName }}</option>
            </select>
          </div>
          <div class="col">
            <select v-model="year" class="form-select" id="dob-year" required>
              <option disabled value="">Year</option>
              <option v-for="n in years" :key="n" :value="n">{{ n }}</option>
            </select>
          </div>
        </div>
      </div>

      <div class="form-floating mt-2">
        <input v-model="email" type="email" class="form-control" id="email" placeholder="name@example.com" required>
        <label for="email">Email address</label>
      </div>

      <div class="form-floating mt-2">
        <input v-model="password" type="password" class="form-control" id="password" placeholder="Password" required>
        <label for="password">Password</label>
      </div>

      <div class="form-floating mt-2">
        <input v-model="confirmPassword" type="password" class="form-control" id="confirm-password" placeholder="Confirm Password" required>
        <label for="confirm-password">Confirm Password</label>
      </div>

      <button class="btn btn-primary w-100 py-2 mt-3" type="submit">Sign Up</button>
    </form>
  </main>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      name: '',
      surname: '',
      nickname: '',
      day: '',
      month: '',
      year: '',
      email: '',
      password: '',
      confirmPassword: '',
      months: [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
      ],
      years: [],
    };
  },
  mounted() {
    const currentYear = new Date().getFullYear();
    for (let i = currentYear; i >= 1900; i--) {
      this.years.push(i);
    }
  },
  methods: {
    async registerUser() {
      try {
        const userData = {
          name: this.name,
          surname: this.surname,
          nickname: this.nickname,
          day: this.day,
          month: this.month,
          year: this.year,
          email: this.email,
          password: this.password,
          confirmPassword: this.confirmPassword
        };

        await axios.post('http://localhost:3000/register', userData);
        alert('Successfully registered!');
      } catch (error) {
        console.error('Registration failed:', error);
        alert('Error during registration');
      }
    }
  }
}
</script>

<style scoped>
@import '../assets/css/sign-up.css';
</style>
