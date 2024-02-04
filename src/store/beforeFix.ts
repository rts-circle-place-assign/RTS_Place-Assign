import { defineStore, acceptHMRUpdate } from 'pinia'
import { useFetch } from '#app'
import { AcceptedCirclesList } from '~/type'

export const useBeforeFixStore = defineStore('beforeFixData', {
  state: () => ({
    beforeFixData: [] as AcceptedCirclesList[],
  }),
  actions: {
    async fetchBeforeFixData() {
      const { data } = await useFetch<AcceptedCirclesList[]>('/api/fetchBeforeFixData')
      if (data.value) {
        this.beforeFixData = data.value
      }
    },
  },
})

// make sure to pass the right store definition, `useAuth` in this case.
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useBeforeFixStore, import.meta.hot))
}
