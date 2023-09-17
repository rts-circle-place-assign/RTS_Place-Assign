# データ取得について

Nuxt3では、①`/server/api/`のtsファイルにてサーバー側でAPIを作成し、②~/composablesまたは~/store/にて①のAPIをuseFetchで呼び出しデータを取得・格納するアクションを設定、③②のアクションを呼び出すという流れになっている。
参考：[【備忘録】Nuxt3のruntimeConfigで設定したAPI KEYを隠蔽する方法](https://zenn.dev/hiroyuki_hiro/articles/5a8b76907956b7)

## 1. データ取得URLを環境変数として格納

.envファイルにデータを取得するAPIのURLを格納する。

```env:.env
GAS_URL = https://script.google.com/macros/s/*********/exec
```

## 2. nuxt.config.tsで環境変数を呼び出す

Nuxt3では、runtimeConfigを使って呼び出す。public: {}にするとクライアント側からでも値を参照できてしまうため、必ず`<public以外の名前>: {}`にすること。

```ts:~/nuxt.config.ts
export default defineNuxtConfig({
  runtimeConfig: {
    gas: {
      thisPlaceAssign: process.env.GAS_URL,
    },
  }
})
```

## 3. 内部サーバーAPIを作成

`~/server/api/`に.tsファイルを作成し、以下のように記述する。

```ts:~/server/api/fetchApplicationData.ts
export default defineEventHandler(async () => {
  try {
    const result = await $fetch(config.gas.applicationData)
    return result
  } catch (e) {
    console.log(e)
    return e
  }
})
```

## 4. 内部サーバーAPIを呼び出すアクションを設定

3. で作成したAPIを`~/composables/`または`~/store/`で呼び出し、データを取得・格納するアクションを設定する。
※ここではPiniaを使用している。

```ts:~/store/kikaku.ts
import { defineStore, acceptHMRUpdate } from 'pinia'

export const useKikakuAllStore = defineStore('kikakuAll', {
  state: () => ({
    kikakuAll: [],
  }),
  actions: {
    async fetchKikakuAll() {
      const config = useRuntimeConfig()
      // const { data } = await useFetch(config.gas.applicationData)
      const { data } = await useFetch('/api/fetchApplicationData')
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

## 5. アクションを呼び出し、データを取得・格納

呼び出したい場所で4.のアクションを呼び出し、データをPiniaのstoreに取得・格納する。

```ts:~/pages/kikaku/[id].vue
import { useKikakuAllStore } from '~/store/'

const KikakuAllStore = useKikakuAllStore()
const { fetchKikakuAll } = KikakuAllStore
await fetchKikakuAll()
```

## 6. storeに格納したデータを読み込む

任意の場所でstoreを呼び出し、データを使えるようにする。

```ts:~/components/TSakuhinRecords.vue
import { storeToRefs } from 'pinia'
import { useKikakuAllStore } from '~/store/'
import { useKaikiStore } from '~/composables/useKaikiStore'
import { Circle } from '~/type'

const kikakuAllStore = useKikakuAllStore()
const { kikakuAll } = storeToRefs(kikakuAllStore)
const all = kikakuAll.value as Circle[]
```
