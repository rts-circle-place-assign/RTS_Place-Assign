const config = useRuntimeConfig()

export default defineEventHandler(async () => {
  try {
    const result = await $fetch(config.gas.emailMaster)
    return result
  } catch (e) {
    console.log(e)
    return e
  }
})
