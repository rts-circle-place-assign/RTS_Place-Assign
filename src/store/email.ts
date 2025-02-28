import { defineStore, acceptHMRUpdate } from 'pinia'
import { useFetch } from '#app'
import { EmailList } from '~/type'

export const useEmailStore = defineStore('emailList', {
  state: () => ({
    emailList: [] as EmailList[],
  }),
  actions: {
    async fetchEmailList() {
      const { data } = await useFetch<EmailList[]>('/api/fetchEmailMaster')
      if (data.value) {
        this.emailList = data.value
      }
    },
  },
})

// make sure to pass the right store definition, `useAuth` in this case.
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useEmailStore, import.meta.hot))
}
