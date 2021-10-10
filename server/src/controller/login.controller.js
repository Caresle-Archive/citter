const User = require('../models/user')
const bcrypt = require('bcrypt')

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
	res.status(200).end()
}

module.exports = {
	checkLogin
}