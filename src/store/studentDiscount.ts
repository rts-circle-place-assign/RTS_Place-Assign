import { defineStore, acceptHMRUpdate } from 'pinia'
import { useFetch } from '#app'
import { StudentDiscountData } from '~/type'

export const useStudentDiscountStore = defineStore('studentDiscount', {
  state: () => ({
    studentDiscount: [] as StudentDiscountData[],
  }),
  actions: {
    async fetchStudentDiscount() {
      const { data } = await useFetch<StudentDiscountData[]>('/api/fetchStudentDiscount')
      if (data.value) {
        this.studentDiscount = data.value
      }
    },
  },
})

// make sure to pass the right store definition, `useAuth` in this case.
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useStudentDiscountStore, import.meta.hot))
}
