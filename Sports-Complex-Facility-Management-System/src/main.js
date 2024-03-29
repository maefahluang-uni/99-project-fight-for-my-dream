import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue'; // Import App.vue
import LoginComponent from './components/login.vue';
import HomeComponent from './components/home.vue';
import ScheduleComponent from './components/schedule.vue'
import AccidentComponent from './components/accident.vue'


import DashboardComponent from './components/dashboard.vue'


const routes = [
  { path: '/', component: HomeComponent }, // Set login as the index route
  { path: '/home', component: HomeComponent },
  { path: '/schedule', component: ScheduleComponent },
  { path: '/accident', component: AccidentComponent },

  { path: '/dashboard', component: DashboardComponent },

  // Add more routes if needed
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount('#app');
