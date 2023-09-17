import { defineStore, acceptHMRUpdate } from 'pinia'
import { useFetch } from '#app'
import { KaikiPlaceAssign } from '~/type'

export const usePastStore = defineStore('past', {
  state: () => ({
    past: [] as KaikiPlaceAssign[],
  }),
  actions: {
    async fetchPast() {
      const { data } = await useFetch<KaikiPlaceAssign[]>('/api/fetchPastPlaceAssign')
      if (data.value) {
        this.past = data.value
      }
    },
  },
})

// make sure to pass the right store definition, `useAuth` in this case.
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(usePastStore, import.meta.hot))
}
