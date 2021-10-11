require('dotenv').config()
require('./db')

const express = require('express')
const app = express()
const PORT = process.env.PORT || 3001
const cors = require('cors')

const handleErrors = require('./middleware/handleErrors')

// Import routes
const userRoute = require('./routes/user.routes')
const loginRoute = require('./routes/login.routes')
const messageRoute = require('./routes/message.routes')


// middlewares
app.use(cors())
app.use(express.json())

// Use imported routes
app.use(userRoute)
app.use(loginRoute)
app.use(messageRoute)

// Not found
app.use((req, res) => {
	res.status(404).end()
})

app.use(handleErrors)

const server = app.listen(PORT, () => console.log(`Server on port ${PORT}`))

module.exports = { app, server }