const User = require('../models/user')

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

module.exports = {
	getFeed,
	getAllUsers,
	getUserByUsername
}