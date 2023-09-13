import { defineStore, acceptHMRUpdate } from 'pinia'
import { useFetch } from '#app'
import { IAllItems } from '~/type'

export const useSpecialTreatmentStore = defineStore('specialTreatment', {
  state: () => ({
    specialTreatment: {} as IAllItems,
  }),
  actions: {
    async fetchSpecialTreatment() {
      const { data } = await useFetch<IAllItems>('/api/v1/item/all-items')
      if (data.value) {
        this.specialTreatment = data.value
      }
    },
  },
})

// make sure to pass the right store definition, `useAuth` in this case.
if (import.meta.hot) {
  import.meta.hot.accept(
    acceptHMRUpdate(useSpecialTreatmentStore, import.meta.hot)
  )
}
