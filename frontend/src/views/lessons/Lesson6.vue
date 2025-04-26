<template>
    <div>
  
      <main class="lesson-content py-5">
        <div class="container">
          <h1 class="mb-4">The Real Magic of Made-Up Languages</h1>
  
          <p>So, yeah, those languages don’t come from distant galaxies — they come from <strong>us</strong>. But that’s exactly what makes them meaningful.</p>
  
          <p>Our greatest skill as a species isn’t strength or speed — it’s <strong>adaptability</strong>. We build tools. We learn new systems. We create and adjust constantly. And language is one of the clearest reflections of that. Whether it's learning a new dialect, decoding a fictional script, or inventing a whole new way to communicate, we constantly evolve in how we understand one another.</p>
  
          <img :src="img1" alt="Languages are human" class="w-100 rounded my-3" />
  
          <p>To <strong>understand</strong> someone — truly — means to step outside of yourself, to learn, to observe, to adapt. That’s what all these artificial languages challenge us to do. They’re puzzles, yes. But they also train empathy, attention, and open-mindedness. They remind us that meaning isn’t always obvious. Sometimes, you have to work for it.</p>
  
          <p>Even if we never meet aliens, and even if we never need to speak Elvish or Tunic script in real life, these experiences still matter. Because in trying to understand something unfamiliar, we get better at understanding <em>everything else</em>. Including each other.</p>
  
          <p>So no, it’s not pointless. It’s practice — for curiosity, connection, and growth.</p>
  
          <div class="lesson-done-button">
            <button v-if="!completed" @click="markCompleted" class="btn btn-success">
              Mark as Completed
            </button>
            <p v-else class="text-success fw-bold">Lesson completed!</p>
          </div>
        </div>
      </main>
  
    </div>
  </template>
  
  <script>
  import img1 from "@/assets/images/6_1.png";
  
  export default {
    name: "Lesson6",
    data() {
      return {
        img1,
        completed: false,
      };
    },
    mounted() {
      const status = localStorage.getItem('lesson6_completed');
      if (status === 'true') {
        this.completed = true;
      }
    },
    methods: {
      markCompleted() {
        this.completed = true;
        localStorage.setItem('lesson6_completed', 'true');
      }
    }
  };
  </script>
  
  <style scoped>
    .lesson-done-button {
    margin-top: 20px;
    text-align: center;
    }
  </style>