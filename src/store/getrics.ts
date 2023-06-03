import { defineStore } from "pinia";

export interface Getric{
    loyalty: number,
    pragmatism: number,
    altruism: number
}

export const getricIcons:{[key in keyof Getric]: string} = {
    pragmatism: 'mdi-cash',
    loyalty: 'mdi-pen',
    altruism: 'mdi-nature-people'
}

export const useGetricsStore = defineStore('getrics', {
    state: ()=>({
        loyalty: 0,
        pragmatism: 0,  
        altruism: 0
    }),

    actions:{
        apply(effect: Getric){
            this.loyalty+=effect.loyalty
            this.pragmatism = effect.pragmatism
            this.altruism = effect.altruism
        },
        increment(key: keyof Getric, value: number){
            this[key]+=value
        }
    }
})