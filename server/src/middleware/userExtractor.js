const jwt = require('jsonwebtoken')
const TOKEN_SECRET = process.env.TOKEN_SECRET

module.exports = (req, res, next) => {
	const authorization = req.get('Authorization')
	let token = ''
	
	if (authorization.toLowerCase().startsWith('bearer')) {
		token = authorization.substring(7)
	}
	
	const decodedToken = jwt.verify(token, TOKEN_SECRET)
	
	if (!decodedToken.id || !decodedToken.username || !token || !decodedToken.name) {
		return res.status(401).json({error: 'token missing or invalid'}).end()
	}

	const { id: userId, name, username } = decodedToken

	req.userId = userId
	req.name = name
	req.username = username

	next()
}