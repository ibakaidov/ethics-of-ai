<template>
    <v-btn v-if="!isOpen" @click.once="open()" :disabled="!isActive" color="accent"><v-icon :icon="getricIcons[fact.currency]"/> {{ fact.cost }}: ???</v-btn>
    <span v-else>
        {{ fact.text }}
    </span>
</template>

<script setup lang="ts">
import { getricIcons, useGetricsStore } from '@/store/getrics';
import { AdditionalFact } from '@/story/Story';
import { ref } from 'vue';

const {fact} = defineProps<{
    fact: AdditionalFact
}>()
const getricsStore = useGetricsStore()
const isActive =getricsStore[fact.currency]>=fact.cost 

const isOpen = ref(false)
function open(){
    getricsStore.increment(fact.currency, -fact.cost)
    isOpen.value = true
}

</script>