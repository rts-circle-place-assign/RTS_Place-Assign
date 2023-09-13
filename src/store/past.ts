import { defineStore, acceptHMRUpdate } from 'pinia'
import { useFetch } from '#app'
import { kaikiPlaceAssign } from '~/type/CircleType'

export const usePastStore = defineStore('past', {
  state: () => ({
    past: [] as kaikiPlaceAssign[],
  }),
  actions: {
    async fetchPast() {
      const { data } = await useFetch<kaikiPlaceAssign[]>(
        '/api/fetchPastPlaceAssign'
      )
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
