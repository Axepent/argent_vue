<template>
    <div>
  
      <main class="lesson-content">
        <div class="container">
          <h1 class="mb-4">The Fermi Paradox or Why are we Alone?</h1>
  
          <p>Have you ever looked up at the stars and wondered, “Are we really alone in the universe?”</p>
  
          <p>That’s exactly what the Fermi Paradox is all about. It starts with a very simple idea:</p>
  
          <p>“The universe is incredibly big — with billions of galaxies, each containing billions of stars and likely even more planets. So where is everybody?”</p>
  
          <img :src="img1" alt="Fermi Paradox" class="img-fluid rounded my-3" />
  
          <p>Statistically, there should be many advanced civilizations out there. With so many planets and so much time, it seems almost certain that intelligent life must have evolved somewhere else besides Earth.</p>
  
          <p>But here’s the strange part: we haven’t found any clear evidence of them. No signals, no spacecraft, no contact. Nothing.</p>
  
          <p>This silence is the mystery behind the Fermi Paradox. It asks:</p>
  
          <p>“If intelligent life is common in the universe, why haven’t we seen any signs of it yet?”</p>
  
          <p>There is a lot of theories and thoughts, let’s go through them really quick:</p>
  
          <ul>
            <li><strong>We Are Too Primitive:</strong> If aliens have the tech to reach us, they’re likely far more advanced. To them, we may be like animals in a zoo — not interesting to visit or communicate with. That’s called the Zoo Hypothesis: they observe us, but don’t interfere.</li>
            <li><strong>They’re Avoiding Contact (Prime Directive):</strong> Just like in Star Trek, advanced civilizations may follow a “do not interfere” rule to let us evolve naturally. Contacting us too early might destroy our development.</li>
            <li><strong>SETI Paradox:</strong> We’re listening for signals from space — but barely sending any ourselves. If all civilizations are listening and none are talking, no one will ever hear anything. Also, SETI listens to a tiny slice of the radio spectrum — what if aliens use lasers or unknown tech instead of radio?</li>
            <li><strong>They Might Be Gone, or Not Born Yet:</strong> Maybe intelligent life existed but went extinct. Or maybe we’re early — Earth may have formed before 92% of potentially habitable planets.</li>
            <li><strong>We Don’t Understand What to Look For:</strong> Aliens might not use language or tech as we know it. They could be so advanced, their communication is unrecognizable to us.</li>
            <li><strong>We’re Not Ready:</strong> Maybe they’re waiting for us to reach a certain level — politically, socially, or technologically.</li>
            <li><strong>We Are Alone (for Now):</strong> It’s possible we are alone — not because life is rare, but because intelligent life is hard to maintain or detect. But the universe is massive, and we’ve explored almost nothing.</li>
          </ul>
  
          <p><strong>Drake Equation:</strong> Scientist Frank Drake made an equation to estimate how many civilizations might exist. But most variables are guesses, so the equation inspires thought — not answers.</p>
  
          <p>Assuming all those points… There is might be a chance, we cannot be sure, but chance always exist!</p>
  
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
  import img1 from "@/assets/images/1_1.jpg";
  
  export default {
    name: "Lesson1",
    data() {
      return {
        img1,
        completed: false,
      };
    },
    mounted() {
      const status = localStorage.getItem('lesson1_completed');
      if (status === 'true') {
        this.completed = true;
      }
    },
    methods: {
      markCompleted() {
        this.completed = true;
        localStorage.setItem('lesson1_completed', 'true');
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