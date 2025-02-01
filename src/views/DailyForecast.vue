// src/views/DailyForecast.vue
<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Prévisions Journalières</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-loading :is-open="loading" message="Chargement..." />
      
      <div v-if="error" class="error-message">
        <ion-text color="danger">{{ error }}</ion-text>
      </div>
      
      <div v-if="dailyForecast.length" class="forecast-container">
        <ion-list>
          <ion-item v-for="(forecast, index) in dailyForecast" :key="index">
            <ion-label>
              <h2>{{ formatDate(forecast.time) }}</h2>
              <p>Max: {{ forecast.temperatureMax }}°C</p>
              <p>Min: {{ forecast.temperatureMin }}°C</p>
            </ion-label>
          </ion-item>
        </ion-list>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { 
  IonPage, IonHeader, IonToolbar, IonTitle, IonContent,
  IonList, IonItem, IonLabel, IonLoading, IonText
} from '@ionic/vue';
import { Geolocation } from '@capacitor/geolocation';
import { CapacitorHttp } from '@capacitor/core';

interface DailyForecast {
  time: string;
  temperatureMax: number;
  temperatureMin: number;
}

const dailyForecast = ref<DailyForecast[]>([]);
const loading = ref<boolean>(true);
const error = ref<string | null>(null);

const getDailyForecast = async (): Promise<void> => {
  try {
    const position = await Geolocation.getCurrentPosition();
    const { latitude, longitude } = position.coords;
    
    const response = await CapacitorHttp.get({
      url: `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=temperature_2m_max,temperature_2m_min`,
    });

    if (response.status === 200) {
      const data = response.data;
      dailyForecast.value = data.daily.time.map((time: string, index: number) => ({
        time,
        temperatureMax: data.daily.temperature_2m_max[index],
        temperatureMin: data.daily.temperature_2m_min[index]
      }));
    }
  } catch (e) {
    error.value = 'Erreur lors de la récupération des prévisions';
  } finally {
    loading.value = false;
  }
};

const formatDate = (dateString: string): string => {
  return new Date(dateString).toLocaleDateString('fr-FR', {
    weekday: 'long',
    month: 'long',
    day: 'numeric'
  });
};

onMounted(() => {
  getDailyForecast();
});
</script>

<style scoped>
.forecast-container {
  padding: 16px;
}

.error-message {
  padding: 16px;
  text-align: center;
}
</style>