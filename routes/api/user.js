const express = require('express')
const router = express.Router()

router.get('/test', userController)

module.exports = router