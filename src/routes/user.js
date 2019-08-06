// Import our Controllers
const userController = require('../controllers/userController')

// Import Swagger documentation
// const documentation = require('./documentation/carApi')

const routesUser = [
  {
    method: 'GET',
    url: '/api/users',
    handler: userController.getUsers
  },
  
  {
    method: 'POST',
    url: '/api/users',
    handler: userController.addUser,
    // schema: documentation.addCarSchema
  },
 
  
]

module.exports = routesUser
