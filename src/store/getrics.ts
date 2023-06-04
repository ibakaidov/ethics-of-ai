import { defineStore } from "pinia";

export interface Getric {
    loyalty: number,
    pragmatism: number,
    altruism: number
}

export const getricIcons: { [key in keyof Getric]: string } = {
    pragmatism: 'mdi-cash',
    loyalty: 'mdi-pen',
    altruism: 'mdi-nature-people'
}

export const useGetricsStore = defineStore('getrics', {
    state: () => ({
        loyalty: 1,
        pragmatism: 1,
        altruism: 1
    }),
    getters: {
        array(): number[] { return [this.loyalty, this.pragmatism, this.altruism] },
        isPositive(): boolean { return !this.array.find((v) => v < 0) }
    },
    actions: {
        apply(effect: Getric) {
            this.loyalty += effect.loyalty
            this.pragmatism = effect.pragmatism
            this.altruism = effect.altruism
        },
        increment(key: keyof Getric, value: number) {
            this[key] += value
        }
    }
})