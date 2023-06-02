<template>
  <section>
    
    <v-btn class="text-none" stacked>
      <v-badge :content="pragmatism" :color="pragmatismColor">
        <v-icon>mdi-cash</v-icon>
      </v-badge>
    </v-btn>
    <v-btn class="text-none" stacked>
      <v-badge :content="loyalty" :color="loyaltyColor">
        <v-icon>mdi-pen</v-icon>
      </v-badge>
    </v-btn>

    <v-btn class="text-none" stacked>
      <v-badge :content="altruism" :color="altruismColor">
        <v-icon>mdi-nature-people</v-icon>
      </v-badge>
    </v-btn>
  </section>
</template>

<script setup lang="ts">
import { useGetricsStore } from '@/store/getrics';
import { ref } from 'vue';
import { computed } from 'vue';


const getricsStore = useGetricsStore();

let pragmatismColor = ref('yellow')
const pragmatism = computed(()=>{
    pragmatismColor.value =  pragmatism.value<getricsStore.pragmatism?'green':'red'
    setTimeout(() => {
        pragmatismColor.value = 'yellow'
    }, 1000);   
    return getricsStore.pragmatism
})
let loyaltyColor = ref('yellow')
const loyalty = computed(()=>{
    loyaltyColor.value =  loyalty.value<getricsStore.loyalty?'green':'red'
    setTimeout(() => {
        loyaltyColor.value = 'yellow'
    }, 1000);   
    return getricsStore.loyalty
})

let altruismColor = ref('yellow')
const altruism = computed(()=>{
    altruismColor.value =  altruism.value<getricsStore.altruism?'green':'red'
    setTimeout(() => {
        altruismColor.value = 'yellow'
    }, 1000);   
    return getricsStore.altruism
})
</script>
