require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3001
const cors = require('cors')

const apiRoute = require('./routes/api.routes')

app.use(cors())
app.use(express.json())
app.use(apiRoute)

app.listen(PORT, () => console.log(`Server on port ${PORT}`))