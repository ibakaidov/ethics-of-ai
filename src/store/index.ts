// Utilities
import { createPinia } from 'pinia'
import { useAnswersStore } from './answers'
import { useGargetStore } from './garget'
import { useGetricsStore } from './getrics'

const pinia = createPinia()

export default pinia


export function resetStores(){
    const stores = [useAnswersStore(), useGargetStore(), useGetricsStore()]

    for (const store of stores) {
        store.$reset()
    }
}