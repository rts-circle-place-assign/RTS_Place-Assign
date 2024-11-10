import { SDApplicationData } from '~/type/'

// 学割申請時に入力された情報（氏名、付与した照合用コード）を取得する

const config = useRuntimeConfig()

export default defineEventHandler(async () => {
  try {
    const result: SDApplicationData[] = await $fetch(config.gas.studentDiscountApplication)
    return result
  } catch (e) {
    console.log(e)
    return e
  }
})
