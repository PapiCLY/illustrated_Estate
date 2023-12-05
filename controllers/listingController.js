const Listing = require('../models/listingModel'); // Import Listing model

const listingController = {
  //Get all listings - http://localhost:2641/api/listing/get
  getListings: async (req, res) => {
    try {
      const listings = await Listing.find();
      res.status(200).json(listings);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  //Get one listing - http://localhost:2641/api/listing/get/:id
  getOneListing: async (req, res) => {
    try {
      const listing = await Listing.findById(req.params.id);
      if (!listing) {
        return res.status(404).json({ error: error.message });
      }
      res.status(200).json(listing);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  //Create a new listing - http://localhost:2641/api/listing/create
  createListing: async (req, res) => {
    try {
      const {
        name,
        description,
        address,
        regularPrice,
        bathrooms,
        bedrooms,
        furnished,
        parking,
        type,
        offer,
        imageUrls,
        userRef,
      } = req.body;

      const newListing = new Listing({
        name,
        description,
        address,
        regularPrice,
        bathrooms,
        bedrooms,
        furnished,
        parking,
        type,
        offer,
        imageUrls,
        userRef,
      });

      const savedListing = await newListing.save();
      res.status(201).json(savedListing);
    } catch (error) {
      res.status(500).json({ error: error.message  });
    }
  },

  //Delete a listing - http://localhost:2641/api/listing/delete/:id
  deleteListing: async (req, res) => {
    try {
      const deletedListing = await Listing.findByIdAndDelete(req.params.id);

      if (!deletedListing) {
        return res.status(404).json({ error: error.message });
      }

      res.status(200).json(deletedListing);
    } catch (error) {
      res.status(500).json({ error: error.message  });
    }
  },
};

module.exports = listingController;

