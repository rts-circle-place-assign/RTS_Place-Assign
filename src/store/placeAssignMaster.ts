import { defineStore, acceptHMRUpdate } from 'pinia'
import { useFetch } from '#app'
import { PlaceAssignMaster } from '~/type/'

export const usePlaceAssignMaster = defineStore('placeAssignMaster', {
  state: () => ({
    placeAssignMaster: [] as PlaceAssignMaster[],
  }),
  actions: {
    async fetchPlaceAssignMaster() {
      const { data } = await useFetch<PlaceAssignMaster[]>('/api/fetchPlaceAssignMaster')
      if (data.value) {
        this.placeAssignMaster = data.value
      }
    },
  },
})

// make sure to pass the right store definition, `useAuth` in this case.
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(usePlaceAssignMaster, import.meta.hot))
}
