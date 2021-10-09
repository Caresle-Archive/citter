const { Router } = require('express')
const route = Router()

const {
	getFeed,
	getAllUsers,
	getUserByUsername,
	createUser
} = require('../controller/api.controller')

route.get('/', getFeed)

route.get('/api/users', getAllUsers)

route.get('/api/users/:username', getUserByUsername)

route.post('/api/users', createUser)

module.exports = route