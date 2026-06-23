import os from 'os'
import { Elysia } from 'elysia'
import { controller, db, logger, middleware, storage, registry } from "@utils"
import { routes } from '@routes'


// =====================================>
// ## Init: middleware & router app
// =====================================>
export const app  =  new Elysia()
  .use(middleware.AccessLog)
  .use(middleware.Cors)
  .use(middleware.Auth)
  .use(middleware.BodyParse)
  .use(controller)
  .use(storage)
  .use(routes)
  .use(middleware.ErrorHandler)


// =====================================>
// ## Init: database
// =====================================>
if (process.env.DB_HOST && process.env.DB_PORT && process.env.DB_USERNAME && process.env.DB_PASSWORD && process.env.DB_DATABASE) {
  db.schema
  logger.start(`Database connected ${process.env.DB_DATABASE}!`)
}


// =====================================>
// ## Init: database olap
// =====================================>


// =====================================>
// ## Init: redis & queue (optional extensions)
// =====================================>
// To use Redis cache in auth, install @kava/redis extension and register it:
// import { redis } from '@kava/redis'
// registry.register('redis', redis)

// To use Queue in logger / auth utilities, register your queue runner/extension:
// import { queue } from '@kava/queue'
// registry.register('queue', queue)


// =====================================>
// ## Init: running server
// =====================================>
function getLocalIP() {
  const interfaces = os.networkInterfaces()
  for (const name of Object.keys(interfaces)) {
    for (const net of interfaces[name] || []) {
      if (net.family === 'IPv4' && !net.internal) return net.address
    }
  }
}

app.listen({ port: process.env.APP_PORT, hostname: '0.0.0.0' })
setTimeout(() => logger.start(`Server is running at \n        [LOCAL]    http://localhost:${process.env.APP_PORT || 4000} \n        [NETWORK]  http://${getLocalIP()}:${process.env.APP_PORT || 4000}!`), 200)




