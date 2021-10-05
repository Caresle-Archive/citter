const uri = process.env.MONGO_URI
const mongoose = require('mongoose')

main()
	.then(() => console.log('db connected'))
	.catch(err => console.log(err))

async function main() {
	await mongoose.connect(uri)
}
