<template>
  <v-container grid-list-xs>
    <v-card>
      <v-card-title primary-title> {{ plot.title }} </v-card-title>
      <v-card-text>
        <text-with-additional-facts
          :text="plot.text"
          :additional-facts="plot.additionalFacts"
        />
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn :to="plot.to">Далее</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
import TextWithAdditionalFacts from "@/components/TextWithAdditionalFacts.vue";
import { plots } from "@/story";

import { useRoute } from "vue-router";

const route = useRoute();
const id = +route.params.id;
const plot = plots[id];
</script>
