// src/views/CurrentWeather.vue
<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Météo Actuelle</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-loading :is-open="loading" message="Chargement..." />
      
      <div v-if="error" class="error-message">
        <ion-text color="danger">{{ error }}</ion-text>
      </div>
      
      <div v-if="weather" class="weather-container">
        <ion-card>
          <ion-card-header>
            <ion-card-subtitle>{{ location }}</ion-card-subtitle>
            <ion-card-title>{{ weather.temperature }}°C</ion-card-title>
          </ion-card-header>
          <ion-card-content>
            <p>Humidité: {{ weather.humidity }}%</p>
            <p>Vent: {{ weather.windSpeed }} km/h</p>
          </ion-card-content>
        </ion-card>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { 
  IonPage, IonHeader, IonToolbar, IonTitle, IonContent,
  IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle,
  IonCardContent, IonLoading, IonText
} from '@ionic/vue';
import { Geolocation } from '@capacitor/geolocation';
import { CapacitorHttp } from '@capacitor/core';

interface WeatherData {
  temperature: number;
  humidity: number;
  windSpeed: number;
}

const weather = ref<WeatherData | null>(null);
const loading = ref<boolean>(true);
const error = ref<string | null>(null);
const location = ref<string>('');

const getCurrentWeather = async (): Promise<void> => {
  try {
    const position = await Geolocation.getCurrentPosition();
    const { latitude, longitude } = position.coords;
    
    const response = await CapacitorHttp.get({
      url: `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,wind_speed_10m`,
    });

    if (response.status === 200) {
      const data = response.data;
      weather.value = {
        temperature: data.current.temperature_2m,
        humidity: data.current.relative_humidity_2m,
        windSpeed: data.current.wind_speed_10m,
      };
      location.value = `${latitude.toFixed(2)}, ${longitude.toFixed(2)}`;
    }
  } catch (e) {
    error.value = 'Erreur lors de la récupération des données météo';
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  getCurrentWeather();
});
</script>

<style scoped>
.weather-container {
  padding: 16px;
}

.error-message {
  padding: 16px;
  text-align: center;
}
</style>
