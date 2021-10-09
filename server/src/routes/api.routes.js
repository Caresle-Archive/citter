const { Router } = require('express')
const route = Router()

const {
	getFeed,
	getAllUsers,
	getUserByUsername
} = require('../controller/api.controller')

route.get('/', getFeed)

route.get('/api/users', getAllUsers)

route.get('/api/users/:username', getUserByUsername)

module.exports = route