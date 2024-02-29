import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import Produit1 from '../views/produit1.vue';
import Produit2 from '../views/produit2.vue';
import Produit3 from '../views/produit3.vue';
import Produit4 from '../views/produit4.vue';
import ProductDetailView from '../views/ProductDetailView.vue';
import '../components/Route.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/route',
      name: 'route',
      component: () => import('../components/Route.vue')
    },
    {
      path: '/produit1',
      name: 'produit1',
      component: Produit1
    },
    {
      path: '/produit2',
      name: 'produit2',
      component: Produit2
    },
    {
      path: '/produit3',
      name: 'produit3',
      component: Produit3
    },
    {
      path: '/produit4',
      name: 'produit4',
      component: Produit4
    },
    {
      path: '/produit/:nom', 
      name: 'produit-detail',
      component: ProductDetailView
    }
  ]
});

export default router;
