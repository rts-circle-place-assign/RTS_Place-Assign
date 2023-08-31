# Piniaの使い方

Nuxt3のuseFetchはページ間遷移をすると再度データがフェッチされ、時間がかかる（別コンポーネントでのuseFetchであっても1ページであれば1回だけ作動するのだが、逆に言えば1回は作動してしまうということである）。
Piniaを使うことでグローバルな状態管理が可能となり、スムーズな遷移を実現できた。
参考：[Pinia and Nuxt 3](https://dev.to/rafaelmagalhaes/pinia-and-nuxt-3-4ij5)

```ts ~/store/kikaku.ts
import { defineStore, acceptHMRUpdate } from 'pinia'
// acceptHMRUpdateは、ページをリロードせずstoreを更新できるようになる関数。

export const useKikakuAllStore = defineStore('kikakuAll', {
  state: () => ({
    kikakuAll: [],
  }),
  actions: {
    async fetchKikakuAll() {
      const config = useRuntimeConfig()
      const { data } = await useFetch('/api/fetchThisPlaceAssign') //ここでデータを取ってきている
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
```

```ts ~/app.vue
import { useKikakuAllStore } from '~/store/'

const store = useKikakuAllStore()
const { fetchKikakuAll } = store
await fetchKikakuAll()
// 全ページに共通でfetchKikakuAll()を実行
```

```ts ~/pages/kikaku/[id].vue
import { storeToRefs } from 'pinia'
import { useKikakuAllStore } from '~/store/'

const store = useKikakuAllStore()
const { kikakuAll } = storeToRefs(store)
const kikaku = useKikakuCardById(kikakuAll.value, Number(route.params.id))
// kikakuAllを見るときは.valueをつける
```
