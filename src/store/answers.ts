import { defineStore } from "pinia";


export const useAnswersStore = defineStore('answers', {
    state: ()=>({
        answers: new Map<number, number>() 
    }),

    actions:{
        save(id: number, value: number){
            this.answers.set(id, value)
        }
    }
})