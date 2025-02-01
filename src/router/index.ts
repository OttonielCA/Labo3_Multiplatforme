import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue';
import CurrentWeather from '../views/CurrentWeather.vue';
import HourlyForecast from '../views/HourlyForecast.vue';
import DailyForecast from '../views/DailyForecast.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/tabs/current'
  },
  {
    path: '/Labo3_Multiplatforme/',
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
        component: CurrentWeather  // Import statique
      },
      {
        path: 'hourly',
        component: HourlyForecast  // Import statique
      },
      {
        path: 'daily',
        component: DailyForecast  // Import statique
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory('/Labo3_Multiplatforme/'),  // Chemin de base explicite
  routes
});

export default router;