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
		const response = await api.get('/users')
		expect(response.body.length).toBe(users.length)
	})

	test('By username', async () => {
		const { username } = users[0]
		const response = await api.get(`/users/${username}`)
		expect(response.status).toBe(302)
	})

	test('Not found user', async () => {
		const username = 'qqqaacc'
		const response = await api.get(`/users/${username}`)
		expect(response.status).toBe(404)
	})

})

describe('POST users', () => {

	test('Valid user', async () => {
		await api
			.post('/users')
			.send({
				name: 'Adrian',
				username: 'Admin',
				password: 'admin1234'
			})
			.set('Accept', 'application/json')
			.expect('Content-Type', /application\/json/)
			.expect(201)
	})

	test('Only username send', async () => {
		await api
			.post('/users')
			.send({
				username: 'UsernameTest'
			})
			.set('Accept', 'application/json')
			.expect(400)
	})

	test('Only name send', async () => {
		await api
			.post('/users')
			.send({
				name: 'Carlos'
			})
			.set('Accept', 'application/json')
			.expect(400)
	})

	test('Send empty string name', async () => {
		await api
			.post('/users')
			.send({
				name: '',
				username: 'UsernameTest',
				password: '1234'
			})
			.set('Accept', 'application/json')
			.expect(400)
	})

	test('Send empty string username', async () => {
		await api
			.post('/users')
			.send({
				name: 'dani',
				username: '',
				password: '1234'
			})
			.set('Accept', 'application/json')
			.expect(400)
	})

	test('Duplicated username', async () => {
		const { username, password } = users[0]
		await api
			.post('/users')
			.send({
				name: 'Charlie',
				username: username,
				password: password
			})
			.set('Accept', 'application/json')
			.expect(400)
	})

	test('Password valid', async () => {
		await api
			.post('/users')
			.send({
				name: 'root',
				username: 'root1',
				password: '12345'
			})
			.set('Accept', 'application/json')
			.expect(201)
	})
})

describe('DELETE', () => {
	test('By username', async () => {
		const username = users[0].username
		await api
			.delete(`/users/${username}`)
			.expect(204)
	})

	test('No username pass', async () => {
		const username = ''
		await api
			.delete(`/users/${username}`)
			.expect(400)
	})
})

afterAll(async () => {
	const client = mongoose.connection.getClient()
	await client.close()
	server.close()
})