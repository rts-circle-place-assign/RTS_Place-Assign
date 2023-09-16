import { defineStore, acceptHMRUpdate } from 'pinia'
import { useFetch } from '#app'
import { PastGaisyuInfo } from '~/lib/hooks'

export const useBeforeResultStore = defineStore('beforeResult', {
  state: () => ({
    beforeResult: [] as PastGaisyuInfo[],
  }),
  actions: {
    async fetchBeforeResult() {
      const { data } = await useFetch<PastGaisyuInfo[]>('/api/fetchBeforeResult')
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
