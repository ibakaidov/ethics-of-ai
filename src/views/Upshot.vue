<template>
  <v-container grid-list-xs>
    
    <v-card>
        <v-card-title primary-title>
            Результат решения проблемы
        </v-card-title>

        <v-card-text>
            {{ answer.upshot }}
        </v-card-text>
    </v-card>
    </v-container>
</template>
<script setup lang="ts">
import { useAnswersStore } from "@/store/answers";
import { useGetricsStore } from "@/store/getrics";
import { stories } from "@/story";
import { useRoute } from "vue-router";

const route = useRoute();
const answersStore = useAnswersStore();
const getricsStore = useGetricsStore();
const sid = +route.params.id;

const id = answersStore.answers.get(sid);
const answer = stories[sid].upshot.answers[id??0]
if (answer) {
  getricsStore.apply(answer.effect);
}
</script>
