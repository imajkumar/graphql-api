// Require the fastify framework and instantiate it
const fastify = require('fastify')({
	logger: true
})

// Require external modules
const mongoose = require('mongoose')

// Connect to DB

var mongoURI='mongodb://imajkumar:Ajay#9711@ds239967.mlab.com:39967/fastifydb';
mongoose.connect(mongoURI, { useNewUrlParser: true });
  mongoose.connection.on('error', (err) => {
    console.log(err);
    process.exit();
  });


module.exports = fastify
