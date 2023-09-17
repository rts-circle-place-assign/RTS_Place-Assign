import { defineStore, acceptHMRUpdate } from 'pinia'
import { useFetch } from '#app'
import { ThisPlaceAssign } from '~/type/CircleType'

export const useThisPlaceAssignStore = defineStore('thisPlaceAssign', {
  state: () => ({
    thisPlaceAssign: [] as ThisPlaceAssign[],
  }),
  actions: {
    async fetchThisPlaceAssign() {
      const { data } = await useFetch<ThisPlaceAssign[]>('/api/fetchThisPlaceAssign')
      if (data.value) {
        this.thisPlaceAssign = data.value
      }
    },
  },
})

// make sure to pass the right store definition, `useAuth` in this case.
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useThisPlaceAssignStore, import.meta.hot))
}
