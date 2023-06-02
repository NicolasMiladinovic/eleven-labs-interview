const express = require('express')
const astronautController = require('../controllers/astronaut.controller.js')

const router = express.Router()

router.get('/astronauts', astronautController.getAstronauts)
router.post('/astronaut', astronautController.addAstronaut)
router.patch('/astronaut/:id', astronautController.updateAstronaut)
router.delete('/astronaut/:id', astronautController.deleteAstronaut)

module.exports = router