import { defineStore, acceptHMRUpdate } from 'pinia'

export const useKikakuAllStore = defineStore('kikakuAll', {
  state: () => ({
    kikakuAll: [],
  }),
  actions: {
    async fetchKikakuAll() {
      const { data } = await useFetch('/api/fetchThisPlaceAssign')
      if (data.value) {
        this.kikakuAll = data.value
      }
    },
  },
})

// make sure to pass the right store definition, `useAuth` in this case.
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useKikakuAllStore, import.meta.hot))
}
