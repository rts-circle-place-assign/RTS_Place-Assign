import { AcceptedCirclesList } from '~/type'

const config = useRuntimeConfig()

export default defineEventHandler(async () => {
  try {
    const result: AcceptedCirclesList[] = await $fetch(config.gas.beforeFixData)
    return result
  } catch (e) {
    console.log(e)
    return e
  }
})
