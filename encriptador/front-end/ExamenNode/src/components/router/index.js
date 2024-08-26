import { createRouter, createWebHistory } from 'vue-router';

import encryptor from '../encryptor.vue';

const routes = [
{
    path:'/',
    name: 'encryptor',
    component: encryptor,
    props:true
}
];

const router = createRouter({
    history: createWebHistory('/'),
    routes
  });
  
  export default router;