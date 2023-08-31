import { PastGaisyuInfo } from '~/type/CircleType'

const config = useRuntimeConfig()

export default defineEventHandler(async () => {
  try {
    const result: PastGaisyuInfo[] = await $fetch(config.gas.pastGaisyu)
    return result
  } catch (e) {
    console.log(e)
    return e
  }
})
