import { defineStore, acceptHMRUpdate } from 'pinia'
import { useFetch } from '#app'
import { SDApplicationData } from '~/type'

// 学割申請時に入力された情報（氏名、付与した照合用コード）を格納する

export const useSDApplicationStore = defineStore('studentDiscountApplication', {
  state: () => ({
    studentDiscountApplication: [] as SDApplicationData[],
  }),
  actions: {
    async fetchSDApplication() {
      const { data } = await useFetch<SDApplicationData[]>('/api/fetchStudentDiscountApplication')
      if (data.value) {
        this.studentDiscountApplication = data.value
      }
    },
  },
})

// make sure to pass the right store definition, `useAuth` in this case.
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useSDApplicationStore, import.meta.hot))
}
