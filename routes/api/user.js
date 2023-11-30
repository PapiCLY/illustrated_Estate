const express = require('express')
const router = express.Router()

const userController = require('../../controllers/userController') 

router.get('/:id', userController.getUser)
router.get('/listings/:id', userController.getUserListings)
router.put('/update/:id', userController.updateUser)
router.post('/create/:id', userController.createUser)
router.delete('/delete/:id', userController.deleteUser)

module.exports = router