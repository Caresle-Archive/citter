const { Router } = require('express')
const route = Router()

const {
	getFeed,
	getAllUsers
} = require('../controller/api.controller')

route.get('/', getFeed)

route.get('/api/users', getAllUsers)

module.exports = route