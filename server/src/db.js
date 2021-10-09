const NODE_ENV = process.env.NODE_ENV
const uri = (NODE_ENV === 'test') ? 
	process.env.MONGO_URI_TEST : process.env.MONGO_URI
const mongoose = require('mongoose')

main()
	.then(() => console.log('db connected'))
	.catch(err => console.log(err))

async function main() {
	await mongoose.connect(uri)
}
