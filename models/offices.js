const mongoose = require("mongoose");
const DBconfig = require("../config/dbConfig");

// Call the function to connect to the database
DBconfig.connectToDatabase();
const officeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: "name is required",
    trim: true,
    lowercase: true,
  },
  email: {
    type: String,
    required: "emailAddress is required",
    lowercase: true,
    trim: true,
  },
  phone: {
    type: String,
    required: "Phone is required",
    lowercase: true,
    trim: true,
  },
  address: {
    type: String,
    required: "Address is required",
    trim: true,
  },
  location: {
    type: String,
    required: "Location is required",
    trim: true,
  },
  map: {
    type: String,
    required: "Map is required",
    trim: true,
  },
});

module.exports.office = mongoose.model("office", officeSchema);
