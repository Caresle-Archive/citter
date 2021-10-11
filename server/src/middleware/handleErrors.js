const ERROR_NAMES = {
	test: res => res.status(500).json({error: 'error test'}),
	JsonWebTokenError: res => res.status(401).json({error: 'token missing or invalid'}),
	defaultError: res => res.status(404).json({error: 'default error'}) 
}


module.exports = (error, req, res, next) => {
	const handler = ERROR_NAMES[error.name] || ERROR_NAMES.defaultError
	
	handler(res, error)
}
