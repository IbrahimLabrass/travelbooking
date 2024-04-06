const mongoose = require("mongoose");
const DBconfig = require("../config/dbConfig");

// Call the function to connect to the database
DBconfig.connectToDatabase();

const contactSchema = new mongoose.Schema({
  area: {
    type: String,
    required: "name is required",
    trim: true,
    lowercase: true,
  },
  name: {
    type: String,
    required: "name is required",
    trim: true,
    lowercase: true,
  },
  title: {
    type: String,
    required: "Title is required",
    trim: true,
  },
  phone: {
    type: String,
    required: "phone number is required",
    trim: true,
  },
  emailAddress: {
    type: String,
    required: "emailAddress is required",
    lowercase: true,
    trim: true,
  },
  picName: {
    type: String,
    required: "Name of the picture is required",
    trim: true,
  },
  location: {
    type: String,
    required: "Location is required",
  },
});

module.exports.contact = mongoose.model("contact", contactSchema);
