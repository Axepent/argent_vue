<template>
    <div>
  
      <main class="lesson-content py-5">
        <div class="container">
          <h1 class="mb-4">Tunic: A Language Built for Discovery</h1>
  
          <p><em>Tunic</em> might not be a household name, but for those who’ve played it, the game leaves a lasting impression — especially because of its <strong>mysterious, completely made-up language</strong>.</p>
  
          <p>At first glance, <em>Tunic</em> looks like a charming indie adventure game, starring a little fox in a big world. But players quickly realize that the entire game — from dialogue to item descriptions — is written in a cryptic, unreadable script. No translation, no hints. Just symbols.</p>
  
          <p>And that’s the point.</p>
  
          <img :src="img1" alt="Tunic language example" class="w-100 rounded my-3" />
  
          <p>The creators of <em>Tunic</em> designed this artificial language not to be handed to the player, but to be <strong>discovered</strong>. As you progress, you collect pages of an in-game instruction manual, styled like something from the 1980s. Bit by bit, symbols begin to connect with meanings, and players start to <strong>translate the language themselves</strong>, just by paying attention, making notes, and experimenting.</p>
  
          <p>Structurally, the language in <em>Tunic</em> is a <strong>substitution cipher</strong>, meaning each symbol stands in for a real English letter or sound. But it’s not just a basic A = star kind of code — the symbols are carefully designed to avoid obvious clues, blending into the retro aesthetic of the game. There’s also clever use of partial words, fragmented phrases, and visual cues that make deciphering the language feel like solving a riddle, not cracking a codebook.</p>
  
          <p>Unlike many fictional languages that are built to be spoken or learned like a second language, the one in <em>Tunic</em> is more like a <strong>linguistic puzzle</strong>. It’s there to create a sense of mystery, to reward curiosity, and to make players feel like true explorers — not just of the game world, but of the game’s <em>rules</em> themselves.</p>
  
          <p>It’s one of the most creative uses of an artificial language in modern gaming, not because it tells a story — but because <em>you</em> uncover the story by <strong>learning the language</strong>.</p>
  
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
  import img1 from "@/assets/images/5_1.jpg";
  
  export default {
    name: "Lesson5",
    data() {
      return {
        img1,
        completed: false,
      };
    },
    mounted() {
      const status = localStorage.getItem('lesson5_completed');
      if (status === 'true') {
        this.completed = true;
      }
    },
    methods: {
      markCompleted() {
        this.completed = true;
        localStorage.setItem('lesson5_completed', 'true');
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