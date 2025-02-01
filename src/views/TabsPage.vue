// src/views/TabsPage.vue
<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="current" href="/tabs/current">
          <ion-icon :icon="thermometer" />
          <ion-label>Actuel</ion-label>
        </ion-tab-button>
        
        <ion-tab-button tab="hourly" href="/tabs/hourly">
          <ion-icon :icon="time" />
          <ion-label>Par heure</ion-label>
        </ion-tab-button>
        
        <ion-tab-button tab="daily" href="/tabs/daily">
          <ion-icon :icon="calendar" />
          <ion-label>Par jour</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script setup lang="ts">
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonPage, IonRouterOutlet } from '@ionic/vue';
import { thermometer, time, calendar } from 'ionicons/icons';
</script>