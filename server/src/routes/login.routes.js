const route = require('express').Router()

const { checkLogin } = require('../controller/login.controller')

route.get('/login', checkLogin)

module.exports = route