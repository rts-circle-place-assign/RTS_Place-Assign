import { defineStore, acceptHMRUpdate } from 'pinia'
import { useFetch } from '#app'
import { Circle } from '~/lib/hooks'

export const useKikakuAllStore = defineStore('kikakuAll', {
  state: () => ({
    kikakuAll: [] as Circle[],
  }),
  actions: {
    async fetchKikakuAll() {
      const { data } = await useFetch<Circle[]>('/api/fetchThisPlaceAssign')
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
