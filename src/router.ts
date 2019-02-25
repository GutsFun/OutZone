import Vue from 'vue';
import Router from 'vue-router';
import Review from './views/Review.vue';
import Items from './views/Items.vue';
import Ennemis from './views/Ennemis.vue';
import Bonus from './views/Bonus.vue';
import PCB from './views/PCB.vue';
import Medias from './views/Medias.vue';
import Emulation from './views/Emulation.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'review',
      component: Review,
    },
    {
      path: '/items',
      name: 'items',
      component: Items,
    },
    {
      path: '/ennemis',
      name: 'ennemis',
      component: Ennemis,
    },
    {
      path: '/bonus',
      name: 'bonus',
      component: Bonus,
    },
    {
      path: '/pcb',
      name: 'pcb',
      component: PCB,
    },
    {
      path: '/medias',
      name: 'medias',
      component: Medias,
    },
    {
      path: '/emulation',
      name: 'emulation',
      component: Emulation,
    },
  ],
});
