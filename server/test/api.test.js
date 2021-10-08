const mongoose = require('mongoose')
const supertest = require('supertest')
const { app, server } = require('../src/index')

const api = supertest(app)


describe('GET for users', () => {

	test('Get users', async () => {
		const response = await api.get('/api/users')
		expect(response.status).toBe(200)
	})
})

afterAll(async () => {
	const client = mongoose.connection.getClient()
	await client.close()
	server.close()
})