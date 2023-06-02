<template>
  <v-container grid-list-xs>
    <v-row>
      <v-col>
        <v-card>
          <v-card-title>Ситуация</v-card-title>
          <v-card-text>
            {{ story.exposition.description }}
          </v-card-text>
        </v-card>
      </v-col>
      <v-col>
        <v-card>
          <v-card-title>Варианты действий</v-card-title>

          <v-card-text>
            <v-radio-group v-model="answerId" row>
              <v-radio v-for="(answer, i) of story.upshot.answers"  :label="answer.text" :value="i" ></v-radio>
            </v-radio-group>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row v-if="answerId!=undefined">
        <v-col>
            <v-card>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn @click="save()">
                        Принять решение!
                    </v-btn>
                </v-card-actions>
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

const router = useRouter()
const route = useRoute();
const answersStore = useAnswersStore();

let answerId = ref<number>();

const id = +route.params.id;

const story = computed(() => {
  return stories[id];
});


function save() {
    if(answerId.value)
    answersStore.save(id, answerId.value);
    router.push(story.value.to)
}
</script>
