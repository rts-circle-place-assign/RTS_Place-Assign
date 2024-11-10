import { StudentDiscountData } from '~/type/'

const config = useRuntimeConfig()

export default defineEventHandler(async () => {
  try {
    const result: StudentDiscountData[] = await $fetch(config.gas.studentDiscountApplication)
    return result
  } catch (e) {
    console.log(e)
    return e
  }
})
