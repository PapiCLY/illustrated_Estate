const express = require('express')
const router = express.Router()

const userController = require('../../controllers/userController') 

router.get('/:id', userController.getUser)
router.get('/listings/:id', userController.getUserListings)
router.post('/update/:id', userController.updateUser)
router.delete('/delete/:id', userController.deleteUser)

module.exports = router