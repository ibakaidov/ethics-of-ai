import { defineStore } from "pinia";


export   type Target = 'imperial' | 'social' | 'commercial'

export const useGargetStore = defineStore('garget', {
    state: () => ({
        target: 'imperial' as Target
    }),
    actions: {
        setTarget(target: Target) {
            this.target = target
        }
    }
})