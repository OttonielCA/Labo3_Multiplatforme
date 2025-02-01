import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/tabs/current'
  },
  {
    path: '/tabs/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/tabs/current'
      },
      {
        path: 'current',
        component: () => import('@/views/CurrentWeather.vue')
      },
      {
        path: 'hourly',
        component: () => import('@/views/HourlyForecast.vue')
      },
      {
        path: 'daily',
        component: () => import('@/views/DailyForecast.vue')
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),  // Modifié ici
  routes
});

export default router;