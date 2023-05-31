const express = require('express')
const astronautController = require('../controllers/astronaut.controller.js')

const router = express.Router()

router.get('/getAstronauts', astronautController.getAstronauts)
router.post('/addAstronaut', astronautController.addAstronaut)
router.put('/updateAstronaut/:id', astronautController.updateAstronaut)
router.delete('/deleteAstronaut/:id', astronautController.deleteAstronaut)

module.exports = router