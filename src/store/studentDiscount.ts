import { defineStore, acceptHMRUpdate } from 'pinia'

export const useStudentDiscountStore = defineStore('studentDiscount', {
  state: () => ({
    studentDiscount: [],
  }),
  actions: {
    async fetchStudentDiscount() {
      const config = useRuntimeConfig()
      const { data } = await useFetch(config.public.studentDiscount)
      if (data.value) {
        this.studentDiscount = data.value
      }
    },
  },
})

// make sure to pass the right store definition, `useAuth` in this case.
if (import.meta.hot) {
  import.meta.hot.accept(
    acceptHMRUpdate(useStudentDiscountStore, import.meta.hot)
  )
}
