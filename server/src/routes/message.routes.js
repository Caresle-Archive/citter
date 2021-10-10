const route = require('express').Router()
const {
	getAllMessages, 
	createMessage,
	deleteMessage
} = require('../controller/message.controller')

route.get('/message', getAllMessages)
route.post('/message', createMessage)
route.delete('/message/:id', deleteMessage)

module.exports = route