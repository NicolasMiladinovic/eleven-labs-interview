const express = require('express')
const astronautController = require('../controllers/astronaut.controller.js')

const router = express.Router()

router.get('/getAstronauts', astronautController.getAstronauts)

module.exports = router