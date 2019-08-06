// External Dependancies
const boom = require('boom')

// Get Data Models
const User = require('../models/User')

// Get all cars
exports.getUsers = async (req, reply) => {
  try {
    const users = await User.find()
    return users
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Get single car by ID
exports.getSingleUser = async (req, reply) => {
  try {
    const id = req.params.id
    const user = await User.findById(id)
    return user
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Add a new car
exports.addUser = async (req, reply) => {
  try {
    const user = new User(req.body)
    return user.save()
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Update an existing car
exports.updateUser = async (req, reply) => {
  try {
    const id = req.params.id
    const user = req.body
    const { ...updateData } = user
    const update = await User.findByIdAndUpdate(id, updateData, { new: true })
    return update
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Delete a car
exports.deleteUser = async (req, reply) => {
  try {
    const id = req.params.id
    const user = await User.findByIdAndRemove(id)
    return user
  } catch (err) {
    throw boom.boomify(err)
  }
}
