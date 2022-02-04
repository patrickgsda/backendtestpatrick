const express = require('express')
const router = express.Router()
const controller = require('../controllers/forecastsController')

router.post('/',controller.validateReq, controller.post)

module.exports = router