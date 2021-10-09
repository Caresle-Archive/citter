const badRequest = (res, next) => {
	res.status(400).end()
	return next()
}

module.exports = { badRequest }