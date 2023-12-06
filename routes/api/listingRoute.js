const express = require("express");
const router = express.Router();
const listingController = require('../../controllers/listingController')

router.get('/get/:id', listingController.getOneListing);
router.get('/get', listingController.getListings);
router.post('/create', listingController.createListing);
router.delete('/delete/:id', listingController.deleteListing);
router.put('/update/:id', listingController.updateOneListing);


module.exports = router;