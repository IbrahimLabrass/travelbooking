const mongoose = require("mongoose");
const DBconfig = require("../config/dbConfig");

// Call the function to connect to the database
DBconfig.connectToDatabase();

const locationSchema = new mongoose.Schema({
  bodyClass: {
    type: String,
    required: "Location Class is required. It can be america, asia, or europe",
    trim: true,
    lowercase: true,
  },
  link: {
    type: String,
    required: "Link directory is required",
    trim: true,
  },
  locationName: {
    type: String,
    required: "Location name is required",
    trim: true,
  },
  picName: {
    type: String,
    required: "Name of the picture is required",
    trim: true,
  },
});

module.exports.locations = mongoose.model("Locations", locationSchema);
