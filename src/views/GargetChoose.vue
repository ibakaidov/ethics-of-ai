<template>
    <v-container grid-list-xs>
        <v-card>
            <v-card-title primary-title>
                Пссс... А у тебя у самого какие цели?
            </v-card-title>
            <v-card-text>
                <v-select
                    
                    :items="items"
                    v-model="target"
                    label="Цель"
                ></v-select>
            </v-card-text>
            <v-card-actions>
                <v-spacer/>
                <v-btn to="/exposition/0">Начать!</v-btn>
            </v-card-actions>
        </v-card>
    </v-container>
</template>

<script setup lang="ts">
import { Target, useGargetStore } from '@/store/garget';
import { computed } from 'vue';


const items: {value: Target, title: string}[] = [
    {value: 'imperial', title:'Создание могучей империи'},
    {value: 'commercial', title:'Создание капиталистического общества'},
    {value: 'social', title: 'Развитие социальных структур и прав личности'}
]

const gstore = useGargetStore()

const target = computed({
    get(){
        return gstore.target
    },
    set(v){
        gstore.setTarget(v)
    }
})
</script>