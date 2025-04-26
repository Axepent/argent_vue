import { LessonController } from './controller/lessonController.js';


const controller = new LessonController();
const path = decodeURIComponent(window.location.pathname);

const lessonCount = 6;
let matched = false;

for (let i = 1; i <= lessonCount; i++) {
  if (path.includes(`Lesson ${i}.html`)) {
    controller.initLessonPage(`lesson${i}`);
    matched = true;
    break;
  }
}

if (!matched && (path.includes('index.html') || path === '/' || path.endsWith('/index.html'))) {
  controller.initHomePage();
}

