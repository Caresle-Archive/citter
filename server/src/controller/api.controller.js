const User = require('../models/user')
const { badRequest } = require('../helpers/helpers')
const bcrypt = require('bcrypt')
const saltRounds = 10

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
	const { name, username, password } = req.body
	let passwordHash
	if (name === undefined || username === undefined || password === undefined) {
		return badRequest(res, next)
	}

	if (name === '' || username === '' || password === '') {
		return badRequest(res, next)
	}

	const found = await User.findOne({username: username})
	if (found !== null) {
		return badRequest(res, next)
	}

	passwordHash = bcrypt.hashSync(password, saltRounds)
	const response = await User.create({
		name: name,
		username: username,
		password: passwordHash
	})
	res.status(201).json(response).end()
}

const deleteUser = async (req, res, next) => {
	const { username } = req.params

	if (username === '' || username === undefined) {
		res.status(400).end()
		return next()
	}

	const response = await User.findOneAndDelete({username: username})
	if (response) {
		res.status(204).end()
		return next()
	}
	res.status(200).end()
}

module.exports = {
	getFeed,
	getAllUsers,
	getUserByUsername,
	createUser,
	deleteUser
}