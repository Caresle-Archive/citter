const badRequest = (res) => {
	return res.status(400).end()
}

module.exports = { badRequest }