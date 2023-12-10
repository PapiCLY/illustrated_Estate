const express = require("express");
const router = express.Router();
const listingController = require('../../controllers/listingController')
const { ensureAuth } = require('../../middleware/auth')

router.get('/get/:id', listingController.getOneListing);
router.get('/get', listingController.getListings);
router.post('/create', ensureAuth, listingController.createListing);
router.delete('/delete/:id', ensureAuth, listingController.deleteListing);
router.put('/update/:id', ensureAuth, listingController.updateOneListing);


module.exports = router;