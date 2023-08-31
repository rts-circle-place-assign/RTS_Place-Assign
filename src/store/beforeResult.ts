import { defineStore, acceptHMRUpdate } from 'pinia'

export const useBeforeResultStore = defineStore('beforeResult', {
  state: () => ({
    beforeResult: [],
  }),
  actions: {
    async fetchBeforeResult() {
      const { data } = await useFetch('/api/fetchBeforeResult')
      if (data.value) {
        this.beforeResult = data.value
      }
    },
  },
})

// make sure to pass the right store definition, `useAuth` in this case.
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useBeforeResultStore, import.meta.hot))
}
