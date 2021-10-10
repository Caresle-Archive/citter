const route = require('express').Router()

const {
	getFeed,
	getAllUsers,
	getUserByUsername,
	createUser,
	deleteUser
} = require('../controller/user.controller')

route.get('/', getFeed)

route.get('/users', getAllUsers)

route.get('/users/:username', getUserByUsername)

route.post('/users', createUser)

route.delete('/users/:username', deleteUser)
route.delete('/users/', deleteUser)

module.exports = route