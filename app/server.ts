import fastify, { FastifyInstance } from 'fastify'

let server: FastifyInstance | undefined

const start = async (
  port: number,
  sendNotification: Function,
  sendPing: Function
) => {
  server = fastify({ logger: true })
  server.post('/notification', async (request, reply) => {
    const { message } = request.body
    sendNotification(message)
    return reply.status(201).send()
  })
  server.post('/ping', async (request, reply) => {
    sendPing()
    return reply.status(201).send()
  })
  await server.listen(port, '0.0.0.0')
}

const stop = async () => {
  if (server) {
    await server.close()
    server = undefined
  }
}

export { start, stop }
