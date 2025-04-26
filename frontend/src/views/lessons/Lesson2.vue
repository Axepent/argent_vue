<template>
    <div>
  
      <main class="lesson-content">
        <div class="container">
          <h1 class="mb-4">Artificial Languages in Media and Games</h1>
  
          <p>
            People are interesting creatures, we love to create — and not just stories or paintings, but languages too.
            These are called artificial languages (or constructed languages, conlangs for short).
          </p>
  
          <img :src="img1" alt="Artificial Language" class="img-fluid rounded my-3" />
  
          <p>
            An artificial language is a language that did not evolve (or even appear) naturally, like English or Chinese,
            but was intentionally created by a person or group of people. These languages have their own grammar,
            vocabulary, and sometimes even writing systems.
          </p>
  
          <p>
            Some artificial languages are made for fun, others for art, and some even for serious communication.
          </p>
  
          <p>We’ll look at a few fascinating examples that were created for storytelling and gaming:</p>
  
          <ul>
            <li><strong>Elvish Language (Quenya & Sindarin)</strong> – from The Lord of the Rings by J.R.R. Tolkien</li>
            <li><strong>Enchanting Table Language</strong> – the cryptic runes seen in Minecraft</li>
            <li><strong>Glyph Language</strong> – from the mysterious indie game Tunic</li>
          </ul>
  
          <p>
            These are just a few examples that we’ll look at more closely. But artificial languages appear all over
            creative media, enriching stories and drawing players and readers deeper into fictional worlds. Here are a few
            more worth mentioning:
          </p>
  
          <ul>
            <li>
              <strong>Esperanto</strong><br />Created in the late 19th century by L. L. Zamenhof, Esperanto is an artificial language
              meant for international communication. It was designed to be easy to learn and politically neutral — and it still
              has a small but passionate global community today.
            </li>
  
            <li>
              <strong>Old Entish (Tolkien)</strong><br />Another of Tolkien’s inventions, Entish is the ancient, slow language of
              the tree-like Ents. It reflects their thoughtful and deliberate nature — so slow to speak that most beings
              simply don’t have the patience to use it.
            </li>
  
            <li>
              <strong>NieR: Automata</strong><br />The game features a constructed vocal language used in its music, designed to sound
              like a blend of many real-world languages. It gives the soundtrack a haunting, timeless quality that fits the
              game's post-apocalyptic world.
            </li>
  
            <li>
              <strong>Nowai Language (Outer Wilds)</strong><br />In Outer Wilds, players encounter messages written in an alien
              script left by an ancient race. While the game translates the words for the player, the script and its spiral
              structure reflect the alien culture’s way of thinking and learning.
            </li>
  
            <li>
              <strong>Languages in Chants of Sennaar</strong><br />This puzzle game revolves entirely around deciphering several
              unknown written languages. Each one has its own logic and symbols, and players must learn to read and
              translate them as part of the core gameplay.
            </li>
  
            <li>
              <strong>Final Fantasy Series</strong><br />Across its many titles, Final Fantasy has introduced several fictional
              languages — including the Al Bhed language in Final Fantasy X, which players can gradually learn and
              translate. These languages add richness to the fantasy settings and cultures.
            </li>
          </ul>
  
          <p>
            These languages aren't just decoration — they help build worlds, shape cultures, and bring something entirely
            new into existence, whether in a fictional universe or the real one.
          </p>
  
          <p>
            Humanity has created many fascinating inventions, but language might be the most important of all. Even though we
            still don’t have a single universal language, it remains one of the few things that truly connects us.
          </p>
  
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
  import img1 from "@/assets/images/2_1.jpg";
  
  export default {
    name: "Lesson2",
    data() {
      return {
        img1,
        completed: false,
      };
    },
    mounted() {
      const status = localStorage.getItem('lesson2_completed');
      if (status === 'true') {
        this.completed = true;
      }
    },
    methods: {
      markCompleted() {
        this.completed = true;
        localStorage.setItem('lesson2_completed', 'true');
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