import { Circle } from '~/type'

const config = useRuntimeConfig()

export default defineEventHandler(async () => {
  try {
    const result: Circle[] = await $fetch(config.gas.thisPlaceAssign)
    return result
  } catch (e) {
    console.log(e)
    return e
  }
})
