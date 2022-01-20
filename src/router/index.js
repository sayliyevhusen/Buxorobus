import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import  Bus from '..//Pages/Bus.vue';
import Buxoro from '..//Pages/Buxoro.vue';
import Loginforma from '..//Pages/Loginforma.vue';


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/bus',
    name: 'bus',
    component: Bus
  },
  {
    path:'/buxoro',
    name: 'buxoro',
    component: Buxoro
  },
  {
    path: '/loginforma',
    name: 'loginforma',
    component: Loginforma
  }


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
