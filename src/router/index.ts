import { createWebHistory, createRouter } from 'vue-router';
import Home from '@/views/Home.vue';
import Topic from '@/views/Topic.vue';


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/topics/:topic_id',
    name: "Topic",
    component: Topic,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
