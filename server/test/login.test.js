const mongoose = require('mongoose')
const supertest = require('supertest')
const { app, server } = require('../src/index')
const User = require('../src/models/user')
const { users } = require('./helpers')
const bcrypt = require('bcrypt')
const saltRounds = 10
const api = supertest(app)

beforeEach(async () => {
	await User.deleteMany({})
	for(const user of users) {
		const passwordHash = bcrypt.hashSync(user.password, saltRounds)
		const newUser = new User({
			name: user.name,
			username: user.username,
			password: passwordHash
		})
		await newUser.save()
	}
})

describe('Login', () => {
	test('valid user', async () => {
		const { username, password } = users[0]
		await api
			.post('/login')
			.send({
				username: username,
				password: password
			})
			.set('Content-Type', 'application/json')
			.expect(200)
	})

	test('empty password', async () => {
		const { username } = users[0]
		await api
			.post('/login')
			.send({
				username: username,
				password: ''
			})
			.set('Content-Type', 'application/json')
			.expect(404)
	})

	test('only user pass', async () => {
		const { username } = users[0]
		await api
			.post('/login')
			.send({
				username: username
			})
			.set('Content-Type', 'application/json')
			.expect(404)
	})

	test('wrong password', async () => {
		const { username } = users[0]
		const { password } = users[1]
		await api
			.post('/login')
			.send({
				username: username,
				password: password
			})
			.set('Content-Type', 'application/json')
			.expect(404)
	})
})

afterAll(async () => {
	const client = mongoose.connection.getClient()
	await client.close()
	server.close()
})