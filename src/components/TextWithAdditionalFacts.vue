<template>
  <div>
    <span v-for="part of parts">
    <span v-if="part.isText">{{ part.text }}</span>
    <additional-fact-button v-else :fact="part.fact"/>
    </span>

  </div>
</template>

<script setup lang="ts">
import { AdditionalFact } from "@/story/Story";
import { ref } from "vue";
import AdditionalFactButton from "./AdditionalFactButton.vue";


const { text, additionalFacts } = defineProps<{
  text: string;
  additionalFacts: AdditionalFact[];
}>();

const exp = /\$[0-9]/g;
const tparts = text.split(exp);
const fparts = text.match(exp);
const parts = ref<
  (
    | {
        isText: true;
        text: string;
      }
    | {
        isText: false;
        fact: AdditionalFact;
      }
  )[]
>([]);

if (fparts)
  for (let index = 0; index < tparts.length; index++) {
    const tpart = tparts[index];
    const fpart = additionalFacts[index];
    parts.value.push({
      isText: true,
      text: tpart,
    });
    if (fpart) {
      parts.value.push({
        isText: false,
        fact: fpart,
      });
    }
  }
</script>
