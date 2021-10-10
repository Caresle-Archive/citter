const route = require('express').Router()

const { checkLogin } = require('../controller/login.controller')

route.post('/login', checkLogin)

module.exports = route