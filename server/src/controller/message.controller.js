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

const updateStatsMessage = async (req, res) => {
	const id = req.params.id
	const {like, share, comment} = req.body
	
	if(!like && !share && !comment) {
		return res.status(204).end()
	}

	const response = await Message.findById(id)
	const socialData = response.social
	if (like) {
		socialData.likes++
	}

	if (share) {
		socialData.shares++
	}
	
	if (comment) {
		socialData.comments++
	}

	const update = await Message.findByIdAndUpdate(id, {social: socialData}, {new: true})
	res.status(200).json(update).end()
}

const deleteMessage = async (req, res) => {
	const id = req.params.id
	await Message.findByIdAndDelete(id)
	res.status(204).end()
}

module.exports = { 
	getAllMessages,
	createMessage,
	updateStatsMessage,
	deleteMessage
}