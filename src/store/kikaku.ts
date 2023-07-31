import { defineStore, acceptHMRUpdate } from 'pinia'

export const useKikakuAllStore = defineStore('kikakuAll', {
  state: () => ({
    kikakuAll: [],
  }),
  actions: {
    async fetchKikakuAll() {
      const config = useRuntimeConfig()
      const { data } = await useFetch(config.public.thisPlaceAssign)
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
