import { createRouter, createWebHistory } from 'vue-router';
import SignIn from '@/views/SignIn.vue';
import SignUp from '@/views/SignUp.vue';
import Profile from '@/views/Profile.vue';
import AboutUs from '@/views/AboutUs.vue';
import Home from '@/views/Home.vue';

import Lesson1 from '@/views/lessons/Lesson1.vue';
import Lesson2 from '@/views/lessons/Lesson2.vue';
import Lesson3 from '@/views/lessons/Lesson3.vue';
import Lesson4 from '@/views/lessons/Lesson4.vue';
import Lesson5 from '@/views/lessons/Lesson5.vue';
import Lesson6 from '@/views/lessons/Lesson6.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: AboutUs },
  { path: '/signin', component: SignIn },
  { path: '/signup', component: SignUp },
  { path: '/profile', component: Profile, meta: { requiresAuth: true } },
  { path: '/lessons/1', component: Lesson1, meta: { requiresAuth: true } },
  { path: '/lessons/2', component: Lesson2, meta: { requiresAuth: true } },
  { path: '/lessons/3', component: Lesson3, meta: { requiresAuth: true } },
  { path: '/lessons/4', component: Lesson4, meta: { requiresAuth: true } },
  { path: '/lessons/5', component: Lesson5, meta: { requiresAuth: true } },
  { path: '/lessons/6', component: Lesson6, meta: { requiresAuth: true } },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token');
  if (to.meta.requiresAuth && !token) {
    next('/signin');
  } else {
    next();
  }
});

export default router;
