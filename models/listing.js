const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  image: {
    type: String,
    default:
      "https://unsplash.com/photos/sunbed-and-parasol-on-empty-sandy-beach-during-low-season-or-early-in-the-morning-sea-and-ocean-paradise-and-vacation-concept-olsYQkcRd5w",
    set: (v) =>
      v === ""
        ? "https://unsplash.com/photos/sunbed-and-parasol-on-empty-sandy-beach-during-low-season-or-early-in-the-morning-sea-and-ocean-paradise-and-vacation-concept-olsYQkcRd5w"
        : v,
  },
  price: {
    type: Number,
  },
  location: {
    type: String,
  },
  country: {
    type: String,
  },
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
