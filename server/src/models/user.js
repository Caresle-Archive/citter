const { Schema, model } = require('mongoose')

const userSchema = new Schema({
	name: String,
	username: String,
	password: String
})

userSchema.set('toJSON', {
	transform: (doc, ret) => {
		ret.id = ret._id
		delete ret._id
		delete ret.__v
		return ret
	}
})

module.exports = model('User', userSchema)