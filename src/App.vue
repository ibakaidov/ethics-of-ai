<template>
  <v-app >
    <v-app-bar>
      <v-app-bar-title>
        Ethics of AI
      </v-app-bar-title>
      <v-spacer/>
      <g-metrics/>
    </v-app-bar>
    <v-main>

      <router-view/>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import GMetrics from './components/GMetrics.vue';


</script>
