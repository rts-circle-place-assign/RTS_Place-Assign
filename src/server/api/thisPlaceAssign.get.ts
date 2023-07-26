import { Circle } from '../../type/CircleType'

const config = useRuntimeConfig()

export default defineEventHandler(async () => {
  const result: Circle[] = await $fetch(config.public.thisPlaceAssign)
  return result
})
