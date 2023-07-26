import { Circle } from '../../type/CircleType'

const config = useRuntimeConfig()

export default defineEventHandler(async () => {
  const result: Circle[] = await $fetch(config.public.thisPlaceAssign)
  console.log(config.public.thisPlaceAssign)
  console.log('server api loaded!' + result)
  return result
})
