const express = require('express')
const astronautRoutes = require('./routes/astronaut.routes.js')

const app = express()

const PORT = 3000

app.use('/', astronautRoutes)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})