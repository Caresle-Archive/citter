const Message = require('../models/message')
const jwt = require('jsonwebtoken')
const TOKEN_SECRET = process.env.TOKEN_SECRET

const getAllMessages = async (req, res) => {
	const response = await Message.find()
	res.status(200).json(response).end()
}

const createMessage = async (req, res) => {
	const { message, media, social } = req.body
	const authorization = req.get('Authorization')
	let token = ''
	
	if (authorization.toLowerCase().startsWith('bearer')) {
		token = authorization.substring(7)
	}
	
	const decodedToken = jwt.verify(token, TOKEN_SECRET)
	
	if (!decodedToken.id || !token) {
		return res.status(400).json({error: 'token missing or invalid'}).end()
	}

	const { id: userId, username } = decodedToken
	
	const response = await Message.create({
		idUser: userId,
		username: username,
		message: message,
		media: media,
		social: social
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