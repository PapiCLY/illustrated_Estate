const express = require("express");
const router = express.Router();
const listingController = require('../../controllers/listingController')

router.get('/get/:id', listingController.getOneListing);
router.get('/get', listingController.getListings);
router.post('/create', listingController.createListing);
router.delete('/delete', listingController.deleteListing);


module.exports = router;