<template>
  <v-container grid-list-xs>
    
    <v-row v-if="answerId != undefined">
      <v-col>
        <v-card>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn @click="save()"> Принять решение! </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card>
          <v-card-title>Ситуация: "{{ story.title }}"</v-card-title>
          <v-card-text>
            <text-with-additional-facts :text="story.exposition.description" :additional-facts="story.exposition.additionalFacts"/>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col>
        <v-card>
          <v-card-title>Варианты действий</v-card-title>

          <v-card-text>
              <v-card small
                v-for="(answer, i) of story.upshot.answers"
                :color="answerId==i?'success': ''"
              >
                <v-card-text>
                    {{ answer.text }}
                </v-card-text>
                <v-card-actions>
                    <v-btn :disabled="answerId==i" @click="answerId=i">Выбрать</v-btn>
                </v-card-actions>
            </v-card>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";

import { stories } from "@/story";
import { Answer } from "@/story//Story";
import { ref } from "vue";

import { useAnswersStore } from "@/store/answers";
import TextWithAdditionalFacts from "@/components/TextWithAdditionalFacts.vue";

const router = useRouter();
const route = useRoute();
const answersStore = useAnswersStore();

let answerId = ref<number>();

const id = +route.params.id;

const story = computed(() => {
  return stories[id];
});

function save() {
  if (answerId.value != undefined) {
    answersStore.save(id, answerId.value);
    router.push(story.value.exposition.to);
  }
}
</script>
