import { StudentDiscountData } from '~/type/CircleType'

const config = useRuntimeConfig()

export default defineEventHandler(async () => {
  try {
    const result: StudentDiscountData[] = await $fetch(config.gas.studentDiscount)
    return result
  } catch (e) {
    console.log(e)
    return e
  }
})
