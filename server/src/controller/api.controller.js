const User = require('../models/user')
const { badRequest } = require('../helpers/helpers')

const getFeed = (req, res) => {
	res.status(200).end()
}

const getAllUsers = async (req, res) => {
	const data = await User.find()
	res.json(data).status(200).end()
}

const getUserByUsername = async (req, res, next) => {
	const username = req.params.username
	const user = await User.find({username: username})
	if (user.length <= 0) {
		res.status(404).end()
		return next()
	}
	res.status(302).json(user).end()
}

const createUser = async (req, res, next) => {
	const { name, username } = req.body
	
	if (name === undefined || username === undefined) {
		return badRequest(res, next)
	}

	if (name === '' || username === '') {
		return badRequest(res, next)
	}

	const found = await User.findOne({username: username})
	if (found !== null) {
		return badRequest(res, next)
	}

	const response = await User.create({
		name: name,
		username: username
	})
	res.status(201).json(response).end()
}

module.exports = {
	getFeed,
	getAllUsers,
	getUserByUsername,
	createUser
}