<template>
    <div>
  
      <main class="lesson-content py-5">
        <div class="container">
          <h1 class="mb-4">The Elvish Languages: Tolkien’s Masterpiece of Linguistic Art</h1>
  
          <p>
            When we think of fictional languages, none are more iconic or influential than the
            <strong>Elvish languages</strong> created by J.R.R. Tolkien for <em>The Lord of the Rings</em>. Tolkien wasn’t just a fantasy author —
            he was a philologist, a scholar of languages, and a lover of words. And for him, language came first.
          </p>
  
          <blockquote class="blockquote">
            <p>
              “The invention of languages is the foundation. The ‘stories’ were made rather to provide a world for the
              languages than the reverse.”
            </p>
            <div class="text-end text-secondary mt-2">— J.R.R. Tolkien</div>
          </blockquote>
  
          <p>
            Tolkien began developing his Elvish tongues long before the stories of Middle-earth were published.
            His passion for language shaped the very fabric of his fictional world, and the result is something unlike
            anything else in literature.
          </p>
  
          <img :src="img1" alt="Elvish development" class="img-fluid rounded my-3" />
  
          <h2 class="mt-5">Two Main Languages: <strong>Quenya</strong> and <strong>Sindarin</strong></h2>
  
          <p>
            Tolkien didn’t create just one Elvish language — he created an entire <strong>language family</strong>, just like in the real world
            (think Latin and its evolution into Spanish, French, Italian, etc.).
          </p>
  
          <ul>
            <li><strong>Quenya:</strong> Often called "High Elvish," this was the ancient and formal language of the Elves.
              It was inspired by Latin and Finnish, and was used in poetry, ceremony, and scholarly writing.</li>
            <li><strong>Sindarin:</strong> This was the more commonly spoken Elvish tongue in Middle-earth during the events of
              <em>The Lord of the Rings</em>. It drew from Welsh sounds and rhythms and had a more natural, spoken flow.</li>
          </ul>
  
          <p>
            Both languages have complete grammar systems, rules for pronunciation, and a deep sense of internal logic and evolution.
            They feel like real languages because, in many ways, they are.
          </p>
  
          <h2 class="mt-5">Writing Systems: <strong>Tengwar</strong> and <strong>Cirth</strong></h2>
  
          <p>
            Tolkien didn’t stop at sounds and grammar — he also created beautiful <strong>scripts</strong> to write these languages.
          </p>
  
          <ul>
            <li><strong>Tengwar:</strong> is the elegant, flowing script used mainly for Quenya and Sindarin.
              It can be seen on the One Ring inscription (though in Black Speech) and in many writings throughout the books and films.</li>
            <li><strong>Cirth:</strong> is a runic script, more angular and simpler, often used by the Dwarves
              but also adapted for Elvish in some regions.</li>
          </ul>
  
          <h2 class="mt-5">Why Tolkien’s Languages Matter</h2>
  
          <p>
            What makes Tolkien’s Elvish languages so mind-blowing is not just their complexity,
            but how deeply they tie into the culture and history of his world.
            Language, in his works, reflects <strong>identity, migration, loss, and change</strong> — just like in real life.
          </p>
  
          <p>
            Elves in Middle-earth don’t just speak differently — their language reveals their <strong>age</strong>, their <strong>origin</strong>,
            and their <strong>values</strong>. Some phrases and names carry centuries of meaning.
            For fans and scholars, learning even a little <strong>Quenya</strong> or <strong>Sindarin</strong> is like stepping into that mythic world.
          </p>
  
          <h2 class="mt-5">Learning and Using Elvish Today</h2>
  
          <p>
            Thanks to Tolkien’s detailed notes and the dedication of fans, it’s possible to <strong>learn</strong> these languages today.
            There are entire <strong>dictionaries</strong>, such as Hiswelókë’s Sindarin dictionary, and educational YouTube channels
            that walk you through pronunciation, writing, and even basic conversation.
          </p>
  
          <p>
            Even if you’re not planning to speak fluent Elvish, diving into a few words — like <em>Mellon</em> (friend) or <em>Namárië</em> (farewell)
            — offers a magical connection to Middle-earth.
          </p>
  
          <img :src="img2" alt="Elvish script example" class="w-100 rounded my-3" />
  
          <h2 class="mt-5">Legacy and Inspiration</h2>
  
          <p>
            Tolkien’s Elvish languages have inspired countless creators, from film and game developers to other writers and linguists.
            Shows like <em>The Witcher</em>, games like <em>Skyrim</em>, and movies like <em>Avatar</em> have followed in his footsteps
            by integrating fictional languages into their storytelling.
          </p>
  
          <p>
            But Tolkien set the gold standard: his languages were never just decoration.
            They were the <strong>beating heart</strong> of his world — and a gift to anyone who loves both words and wonder.
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
  import img1 from "@/assets/images/3_1.jpg";
  import img2 from "@/assets/images/3_2.jpg";
  
  export default {
    name: "Lesson3",
    data() {
      return {
        img1,
        img2,
        completed: false,
      };
    },
    mounted() {
      const status = localStorage.getItem('lesson3_completed');
      if (status === 'true') {
        this.completed = true;
      }
    },
    methods: {
      markCompleted() {
        this.completed = true;
        localStorage.setItem('lesson3_completed', 'true');
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
  