const Message = require('../models/message')

const getAllMessages = async (req, res) => {
	const response = await Message.find()
	res.status(200).json(response).end()
}

const createMessage = async (req, res) => {
	const { message, media, social } = req.body
	
	const response = await Message.create({
		idUser: req.userId,
		name: req.name,
		username: req.username,
		message,
		media,
		social
	})
	res.status(200).json(response).end()
}

const deleteMessage = async (req, res) => {
	const id = req.params.id

	await Message.findByIdAndDelete(id)
	res.status(204).end()
}

module.exports = { 
	getAllMessages,
	createMessage,
	deleteMessage
}