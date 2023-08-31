import { Circle } from '~/type/CircleType'

const config = useRuntimeConfig()

export default defineEventHandler(async () => {
  try {
    const result: Circle[] = await $fetch(config.gas.pastPlaceAssign)
    return result
  } catch (e) {
    console.log(e)
    return e
  }
})