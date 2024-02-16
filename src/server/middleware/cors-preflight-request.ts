import { defineEventHandler } from 'h3'

export default defineEventHandler(event => {
  // Answers HTTP 204 OK to CORS preflight requests using OPTIONS method :
  // if (event.method === 'OPTIONS' && isPreflightRequest(event)) {
  if (isPreflightRequest(event)) {
    event.node.res.statusCode = 204
    event.node.res.statusMessage = 'No Content'
    return 'OK'
  }
})
