<template>
    <v-container grid-list-xs >
        <v-card>
            <v-card-title primary-title>
                Вы не справились!
            </v-card-title>
            <v-card-text>
                Одна из метрик вашей эффективности стала отрицательной! Вы уволены и брошены в бутырку!
            </v-card-text>
            <v-card-actions>
            <v-spacer/>
            <v-btn color="success" @click="tryAgain">Начать сначала</v-btn>
            </v-card-actions>
        </v-card>
    </v-container>
</template>


<script setup lang="ts">
import { resetStores } from '@/store';
import { useRouter } from 'vue-router';

const router = useRouter()
function tryAgain() {
    
    resetStores()
    router.push({
        path: '/'
    })
}
</script>