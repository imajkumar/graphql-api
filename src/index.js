// Require the fastify framework and instantiate it
const fastify = require('fastify')({
  logger: true
})

// Require external modules
const mongoose = require('mongoose')

// Import Routes
const routes = require('./routes')
const routesUser = require('./routes/user')


// Import Swagger Options
const swagger = require('./config/swagger')

// Register Swagger
fastify.register(require('fastify-swagger'), swagger.options)

// Connect to DB
var mongoURI='mongodb://imajkumar:Ajay#9711@ds239967.mlab.com:39967/fastifydb';
mongoose.connect(mongoURI, { useNewUrlParser: true });
  mongoose.connection.on('error', (err) => {
    console.log(err);
    process.exit();
  });

// mongoose.connect('')
//   .then(() => console.log('MongoDB connected...'))
//   .catch(err => console.log(err))

// Loop over each route
routes.forEach((route, index) => {
  fastify.route(route)
})
routesUser.forEach((routea, index) => {
  fastify.route(routea)
})

// Run the server!
const start = async () => {
  try {
    await fastify.listen(3000, '0.0.0.0')
    fastify.swagger()
    fastify.log.info(`server listening on ${fastify.server.address().port}`)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()
