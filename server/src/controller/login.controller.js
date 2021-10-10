const User = require('../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const TOKEN_SECRET = 
	(process.env.NODE_ENV === 'test') 
		? 'secret' : process.env.TOKEN_SECRET

const checkLogin = async (req, res, next) => {
	const { username, password } = req.body
	const response = await User.findOne({username: username})
	if (!response || password === '' || password === undefined) {
		res.status(404).end()
		return next()
	}
	if (!bcrypt.compareSync(password, response.password)) {
		res.status(404).end()
		return next()
	}

	const userForToken = {
		id: response._id,
		username: response.username
	}
	const token = jwt.sign(userForToken, TOKEN_SECRET)

	res.status(200).send({
		username: response.username,
		token: token
	}).end()
}

module.exports = {
	checkLogin
}