import { defineStore, acceptHMRUpdate } from 'pinia'

export const useBlockNumberStore = defineStore('blockNumber', {
  state: () => ({
    blockNumber: [],
  }),
  actions: {
    async fetchBlockNumber() {
      const { data } = await useFetch('/api/fetchBlockNumber')
      if (data.value) {
        this.blockNumber = data.value
      }
    },
  },
})

// make sure to pass the right store definition, `useAuth` in this case.
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useBlockNumberStore, import.meta.hot))
}
