<template>
  <main>
    <div class="container">

      <div class="row">
        <div class="col-md-4 mb-4" v-for="lesson in lessons" :key="lesson.id">
          <div class="card h-100 shadow-sm">
            <img :src="lesson.image" class="card-img-top" alt="Lesson Image" />

            <div class="card-body d-flex flex-column">
              <h5 class="card-title">{{ lesson.title }}</h5>
              <p class="card-text flex-grow-1">{{ lesson.description }}</p>

              <router-link :to="lesson.link" class="btn btn-primary mt-3">
                Go to Lesson
              </router-link>

              <div v-if="lesson.completed" class="text-success mt-2 fw-bold">
                Completed
              </div>
              <div v-else class="text-muted mt-2">
                Not Completed
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </main>
</template>

<script>
import img1 from "@/assets/images/1.jpg";
import img2 from "@/assets/images/2.jpg";
import img3 from "@/assets/images/3.1.jpg";
import img4 from "@/assets/images/4.jpg";
import img5 from "@/assets/images/5.jpg";
import img6 from "@/assets/images/6.jpg";

export default {
  name: 'Home',
  data() {
    return {
      lessons: [
        { id: 1, title: 'Lesson 1: The Fermi Paradox', description: 'Everybody heard about The Fermi Paradox, this topic probably hard to understand, so we will try to explain it in simple words.', link: '/lessons/1', image: img1, completed: false },
        { id: 2, title: 'Lesson 2: Artificial Languages', description: ' Mankind already using some artifial languages for books, games and art in general.In this article we will see a few examples for further discussions', link: '/lessons/2', image: img2, completed: false },
        { id: 3, title: 'Lesson 3: Elves', description: 'Language of elves from book "Lord of the Ring", Tolkien created whole new language for them.', link: '/lessons/3', image: img3, completed: false },
        { id: 4, title: 'Lesson 4: SGA (Minecraft)', description: 'Minecraft, one of the most popular game in the world, and one more briliant example, there we got enchanment language (I know that somebody thinks that it is just random symbols, but that is actually a language).', link: '/lessons/4', image: img4, completed: false },
        { id: 5, title: 'Lesson 5: Tunic', description: 'Tunic, does this word remind you of anything? Well, probably no, but as you probably guessed it is one more artificial language made by people', link: '/lessons/5', image: img5, completed: false },
        { id: 6, title: 'Lesson 6: Purpose', description: 'After all those languages you probably wonder: "Why I read that? Is not it pointless? There is no alliens, just languages made by people". And you got a point, but our skill, as a kind, is adaptivity, try not forget about that.', link: '/lessons/6', image: img6, completed: false },
      ]
    };
  },
  mounted() {
    this.lessons.forEach(lesson => {
      const status = localStorage.getItem(`lesson${lesson.id}_completed`);
      if (status === 'true') {
        lesson.completed = true;
      }
    });
  }
}
</script>

<style scoped>
.card {
  transition: transform 0.2s;
}

.card:hover {
  transform: scale(1.03);
}

.card-img-top {
  height: 200px;
  object-fit: cover;
}
</style>
