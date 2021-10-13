const { Schema, model } = require('mongoose')

const messageSchema = new Schema({
	idUser: String,
	name: String,
	username: String,
	message: String,
	media: {
		typeMedia: String,
		src: String
	},
	social: {
		comments: Number,
		shares: Number,
		likes: Number
	}
})

// Remove _id and __v to returned object
messageSchema.set('toJSON', {
	transform: (doc, ret) => {
		ret.id = ret._id
		delete ret._id
		delete ret.__v
		return ret
	}
})

module.exports = model('Message', messageSchema)