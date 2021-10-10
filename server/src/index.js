require('dotenv').config()
require('./db')
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3001
const cors = require('cors')

const userRoute = require('./routes/user.routes')
const loginRoute = require('./routes/login.routes')

app.use(cors())
app.use(express.json())
app.use(userRoute)
app.use(loginRoute)

const server = app.listen(PORT, () => console.log(`Server on port ${PORT}`))

module.exports = { app, server }