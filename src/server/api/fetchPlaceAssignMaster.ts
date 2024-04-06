import { PlaceAssignMaster } from '~/type'

const config = useRuntimeConfig()

export default defineEventHandler(async () => {
  try {
    const result: PlaceAssignMaster[] = await $fetch(config.gas.placeAssignMaster)
    return result
  } catch (e) {
    console.log(e)
    return e
  }
})
