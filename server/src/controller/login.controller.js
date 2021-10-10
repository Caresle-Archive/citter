const User = require('../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const TOKEN_SECRET = 
	(process.env.NODE_ENV === 'test') 
		? 'secret' : process.env.TOKEN_SECRET

const checkLogin = async (req, res) => {
	const { username, password } = req.body
	const response = await User.findOne({username: username})
	if (!response || password === '' || password === undefined) {
		return res.status(404).end()
	}
	if (!bcrypt.compareSync(password, response.password)) {
		return res.status(404).end()
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