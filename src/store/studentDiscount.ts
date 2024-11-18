import { defineStore, acceptHMRUpdate } from 'pinia'
import { useFetch } from '#app'
import { CircleApplicationSDData } from '~/type'

// サークル参加申込時に入力された情報（申込者氏名、入力された照合用コード）を格納する

export const useSDStore = defineStore('studentDiscount', {
  state: () => ({
    studentDiscount: [] as CircleApplicationSDData[],
  }),
  actions: {
    async fetchSD() {
      const { data } = await useFetch<CircleApplicationSDData[]>('/api/fetchStudentDiscount')
      if (data.value) {
        this.studentDiscount = data.value
      }
    },
  },
})

// make sure to pass the right store definition, `useAuth` in this case.
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useSDStore, import.meta.hot))
}
