// src/views/HourlyForecast.vue
<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Prévisions Horaires</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-loading :is-open="loading" message="Chargement..." />
      
      <div v-if="error" class="error-message">
        <ion-text color="danger">{{ error }}</ion-text>
      </div>
      
      <div v-if="hourlyForecast.length" class="forecast-container">
        <ion-list>
          <ion-item v-for="(forecast, index) in hourlyForecast" :key="index">
            <ion-label>
              <h2>{{ formatHour(forecast.time) }}</h2>
              <p>{{ forecast.temperature }}°C</p>
              <p>Humidité: {{ forecast.humidity }}%</p>
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

interface HourlyForecast {
  time: string;
  temperature: number;
  humidity: number;
}

const hourlyForecast = ref<HourlyForecast[]>([]);
const loading = ref<boolean>(true);
const error = ref<string | null>(null);

const getHourlyForecast = async (): Promise<void> => {
  try {
    const position = await Geolocation.getCurrentPosition();
    const { latitude, longitude } = position.coords;
    
    const response = await CapacitorHttp.get({
      url: `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,relative_humidity_2m`,
    });

    if (response.status === 200) {
      const data = response.data;
      hourlyForecast.value = data.hourly.time
        .slice(0, 24)
        .map((time: string, index: number) => ({
          time,
          temperature: data.hourly.temperature_2m[index],
          humidity: data.hourly.relative_humidity_2m[index]
        }));
    }
  } catch (e) {
    error.value = 'Erreur lors de la récupération des prévisions';
  } finally {
    loading.value = false;
  }
};

const formatHour = (timeString: string): string => {
  return new Date(timeString).toLocaleTimeString('fr-FR', {
    hour: '2-digit',
    minute: '2-digit'
  });
};

onMounted(() => {
  getHourlyForecast();
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