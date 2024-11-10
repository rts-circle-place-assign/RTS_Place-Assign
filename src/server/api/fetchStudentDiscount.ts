import { CircleApplicationSDData } from '~/type/'

// サークル参加申込時に入力された情報（申込者氏名、入力された照合用コード）を取得する

const config = useRuntimeConfig()

export default defineEventHandler(async () => {
  try {
    const result: CircleApplicationSDData[] = await $fetch(config.gas.studentDiscount)
    return result
  } catch (e) {
    console.log(e)
    return e
  }
})
