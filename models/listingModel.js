const express = require("express");
const router = express.Router();
const listingController = require('../controllers/listingController')

router.get('/get', getListings);
router.post('/create', createListing);
router.delete('/delete', deleteListing);


module.exports = router;