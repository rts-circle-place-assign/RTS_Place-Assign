import { defineStore, acceptHMRUpdate } from 'pinia'

export const useGaisyuNumberStore = defineStore('gaisyuNumber', {
  state: () => ({
    gaisyuNumber: [],
  }),
  actions: {
    async fetchGaisyuNumber() {
      const { data } = await useFetch('/api/fetchGaisyuNumber')
      if (data.value) {
        this.gaisyuNumber = data.value
      }
    },
  },
})

// make sure to pass the right store definition, `useAuth` in this case.
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useGaisyuNumberStore, import.meta.hot))
}
