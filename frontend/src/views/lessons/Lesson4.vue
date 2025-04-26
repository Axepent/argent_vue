<template>
    <div>
  
      <main class="lesson-content py-5">
        <div class="container">
          <h1 class="mb-4">The Enchantment Language: More Than Just Random Symbols</h1>
  
          <p><em>Minecraft</em> is one of the most popular and creative games in the world — a digital sandbox where players build, explore, and survive. But hidden within its blocky, pixelated universe is something unexpected: an <strong>artificial language</strong>.</p>
  
          <p>When players use the <strong>enchanting table</strong>, mysterious runes appear. At first glance, these symbols look like nonsense — just a visual effect to create a sense of magic. But here’s the twist: <strong>it’s not just random</strong>. It’s a real, readable writing system called the <strong>Standard Galactic Alphabet (SGA)</strong>.</p>
  
          <img :src="img1" alt="SGA in Minecraft" class="w-100 rounded my-3" />
  
          <p><strong>The Standard Galactic Alphabet, or SGA</strong>, is a fictional script originally created for the 1990s video game <em>Commander Keen</em>, developed by id Software. In that game, it was used to represent alien writing across signs and terminals — adding a fun, cryptic layer to the sci-fi world.</p>
  
          <p>What makes SGA interesting is that it's <strong>not just decorative</strong>. It’s a <strong>substitution cipher</strong>, where each symbol corresponds directly to a letter in the English alphabet. That means, with a little practice, you can <strong>read and write English words using SGA</strong>. It’s like a secret code — one that’s simple enough to learn, but mysterious enough to feel alien or magical.</p>
  
          <p>Later, when Mojang developed <em>Minecraft</em>, they borrowed this exact script to use in the <strong>enchanting table interface</strong>, where it appears as the text floating around the book. While the words don’t always match the enchantment effects, they’re still real, readable phrases written in SGA. This little detail adds a touch of lore and mystery to the game, sparking curiosity in millions of players.</p>
  
          <p>Today, the SGA has become a kind of <strong>cultural relic</strong> among gamers and language enthusiasts. You’ll find fonts, charts, and online tools that help you write your own messages using this script. It’s a perfect example of how a simple, made-up alphabet can grow into something meaningful and widely recognized — just by being cleverly placed in popular games.</p>
  
          <img :src="img2" alt="SGA example" class="w-100 rounded my-3" />
  
          <p>However, even when translated, back to the topic of the <strong>enchantments</strong> in Minecraft, often words have nothing to do with the actual item or effect. The words are pulled from a list of fantasy-sounding phrases like “Chanted,” “Glimmer,” or “Eldritch.” This design choice keeps the game feeling magical and unpredictable, while still giving a nod to real-world linguistics.</p>
  
          <p>Some dedicated players have even learned to <strong>read and write</strong> in this alphabet fluently. For example, you can find someone challenge themselves to <strong>learn the entire language in just 24 hours</strong> — and succeed (not that hard to when it’s only a code, but still <em>impressive</em>).</p>
  
          <p><strong>So</strong> while the enchantment table may not teach you how to cast spells, it’s another brilliant example of how artificial languages can add depth, mystery, and creativity to the gaming experience — even if they’re hiding in plain sight.</p>
  
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
  import img1 from "@/assets/images/4_1.jpg";
  import img2 from "@/assets/images/4_2.jpg";
  
  export default {
    name: "Lesson4",
    data() {
      return {
        img1,
        img2,
        completed: false,
      };
    },
    mounted() {
      const status = localStorage.getItem('lesson4_completed');
      if (status === 'true') {
        this.completed = true;
      }
    },
    methods: {
      markCompleted() {
        this.completed = true;
        localStorage.setItem('lesson4_completed', 'true');
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