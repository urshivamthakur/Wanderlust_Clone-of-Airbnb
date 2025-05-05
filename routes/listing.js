const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js");
const { isLoggedIn, isOwner, validateListing } = require("../middleware.js");
const listingController = require("../controllers/listings.js");

router
  .route("/")
  // **** Index Route ****
  .get(wrapAsync(listingController.index))
  // **** create Route ****
  .post(
    isLoggedIn,
    validateListing,
    wrapAsync(listingController.createListing)
  );

// **** New Route ****
router.get("/new", isLoggedIn, listingController.renderNewForm);

router
  .route("/:id")
  // **** Read: Show Route ****
  .get(wrapAsync(listingController.showListing))
  // **** Update Route ****
  .put(
    isLoggedIn,
    isOwner,
    validateListing,
    wrapAsync(listingController.updateListing)
  )
  // **** Delete Route ****
  .delete(isLoggedIn, isOwner, wrapAsync(listingController.destroyListing));

// **** Edit Route ****
router.get(
  "/:id/edit",
  isLoggedIn,
  isOwner,
  wrapAsync(listingController.renderEditForm)
);

module.exports = router;
