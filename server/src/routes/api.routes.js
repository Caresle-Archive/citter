const { Router } = require('express')
const route = Router()

const {
	getFeed
} = require('../controller/api.controller')

route.get('/', getFeed)

module.exports = route