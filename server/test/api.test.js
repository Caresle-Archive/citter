const mongoose = require('mongoose')
const supertest = require('supertest')
const { app, server } = require('../src/index')

const api = supertest(app)
const { users } = require('./helpers')
const User = require('../src/models/user')


beforeEach(async () => {
	await User.deleteMany({})
	for(const user of users) {
		const newUser = new User(user)
		await newUser.save()
	}
})

describe('GET for users', () => {

	test('All users', async () => {
		const response = await api.get('/api/users')
		expect(response.body.length).toBe(users.length)
	})

	test('By username', async () => {
		const { username } = users[0]
		const response = await api.get(`/api/users/${username}`)
		expect(response.status).toBe(302)
	})

	test('Not found user', async () => {
		const username = 'qqqaacc'
		const response = await api.get(`/api/users/${username}`)
		expect(response.status).toBe(404)
	})

})

describe('POST users', () => {

	test('Valid user', async () => {
		await api
			.post('/api/users')
			.send({
				name: 'Adrian',
				username: 'AdrianPSI'
			})
			.set('Accept', 'application/json')
			.expect('Content-Type', /application\/json/)
			.expect(201)
	})

	test('Only username send', async () => {
		await api
			.post('/api/users')
			.send({
				username: 'UsernameTest'
			})
			.set('Accept', 'application/json')
			.expect(400)
	})

	test('Only name send', async () => {
		await api
			.post('/api/users')
			.send({
				name: 'Carlos'
			})
			.set('Accept', 'application/json')
			.expect(400)
	})

	test('Send empty string name', async () => {
		await api
			.post('/api/users')
			.send({
				name: '',
				username: 'UsernameTest'
			})
			.set('Accept', 'application/json')
			.expect(400)
	})

	test('Send empty string username', async () => {
		await api
			.post('/api/users')
			.send({
				name: 'dani',
				username: ''
			})
			.set('Accept', 'application/json')
			.expect(400)
	})

	test('Duplicated username', async () => {
		const username = users[0].username
		await api
			.post('/api/users')
			.send({
				name: 'Charlie',
				username: username
			})
			.set('Accept', 'application/json')
			.expect(400)
	})

})

afterAll(async () => {
	const client = mongoose.connection.getClient()
	await client.close()
	server.close()
})