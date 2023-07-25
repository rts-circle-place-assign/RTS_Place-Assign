import { PastGaisyuInfo } from '../../type/CircleType'

const config = useRuntimeConfig()

export default defineEventHandler(async () => {
  const result: PastGaisyuInfo[] = await $fetch(config.public.pastGaisyu)
  return result
})
