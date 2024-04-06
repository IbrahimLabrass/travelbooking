const mongoose = require("mongoose");
const DBconfig = require("../config/dbConfig");

// Call the function to connect to the database
DBconfig.connectToDatabase();

const purchasedPackagesSchema = new mongoose.Schema({
  userID: {
    type: String,
    required: "User Must be logged in",
    trim: true,
  },
  packageID: {
    type: String,
    required: "Package must be selected",
    trim: true,
  },
  numberBooked: {
    type: Number,
    required: "Number booked is required",
    trim: true,
  },
  totalCost: {
    type: Number,
    required: "Cost of package is required",
    trim: true,
  },
  detailedLocation: {
    type: String,
    required: "Location Name is required",
    trim: true,
  },
});

module.exports.purchasedPackages = mongoose.model(
  "purchasedPackages",
  purchasedPackagesSchema
);
