const route = require('express').Router()

const {
	getFeed,
	getAllUsers,
	getUserByUsername,
	createUser,
	deleteUser
} = require('../controller/user.controller')

route.get('/', getFeed)

route.get('/api/users', getAllUsers)

route.get('/api/users/:username', getUserByUsername)

route.post('/api/users', createUser)

route.delete('/api/users/:username', deleteUser)
route.delete('/api/users/', deleteUser)

module.exports = route