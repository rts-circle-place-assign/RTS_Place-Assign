export default defineEventHandler(event => {
  const config = useRuntimeConfig()

  /* Basic 認証が不要な場合（開発環境など）は 「.env」 内の BASIC_AUTH_ENABLED を「false」に変更すれば OK */
  if (config?.auth.basic_auth_enabled !== 'true') return

  const base64Credentials = event.req.headers?.authorization?.split(' ')?.[1]

  if (base64Credentials) {
    const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii')
    const [username, password] = credentials.split(':')

    if (username === config?.auth.basic_auth_user && password === config?.auth.basic_auth_password) return
  }

  event.res.statusCode = 401
  event.res.setHeader('WWW-Authenticate', 'Basic realm="Secure Area"')
  event.res.end('Unauthorized')
})
