const express = require('express')
const cors = require('cors')
const astronautRoutes = require('./routes/astronaut.routes.js')

const app = express()

const PORT = 3000

app.use(cors())
app.use('/', astronautRoutes)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})