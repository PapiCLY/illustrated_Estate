const express = require('express')
const router = express.Router()
const { ensureAuth } = require('../../middleware/auth')

const userController = require('../../controllers/userController') 

router.get('/:id', ensureAuth, userController.getUser)
router.post('/create', ensureAuth, userController.createUser)
router.get('/listings/:id', ensureAuth, userController.getUserListings)
router.put('/update/:id', ensureAuth, userController.updateUser)
router.delete('/delete/:id', ensureAuth, userController.deleteUser)

module.exports = router