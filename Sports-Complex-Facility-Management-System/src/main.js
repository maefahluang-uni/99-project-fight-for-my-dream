import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue'; // Import App.vue
import LoginComponent from './components/login.vue';
import HomeComponent from './components/home.vue';

const routes = [
  { path: '/', component: LoginComponent }, // Set login as the index route
  { path: '/home', component: HomeComponent },
  // Add more routes if needed
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount('#app');
