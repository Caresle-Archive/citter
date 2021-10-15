const route = require('express').Router()
const {
	getAllMessages, 
	createMessage,
	updateStatsMessage,
	deleteMessage
} = require('../controller/message.controller')

const userExtractor = require('../middleware/userExtractor')


route.get('/message', getAllMessages)
route.post('/message', userExtractor, createMessage)
route.post('/message/:id', updateStatsMessage)
route.delete('/message/:id', userExtractor, deleteMessage)

module.exports = route