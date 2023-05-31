const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const astronautRoutes = require('./routes/astronaut.routes.js')

const app = express()

const PORT = 3000

// Authorize all requests
app.use(cors())
// Authorize json requests
app.use(bodyParser.json());
// Define routes
app.use('/', astronautRoutes)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})