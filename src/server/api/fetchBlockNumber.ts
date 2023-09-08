const config = useRuntimeConfig()

export default defineEventHandler(async () => {
  try {
    const result = await $fetch(config.gas.blockNumber)
    return result
  } catch (e) {
    console.log(e)
    return e
  }
})
