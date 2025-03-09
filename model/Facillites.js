const mongoose = require("mongoose");

const FacillitesSchema = new mongoose.Schema({
  Facillity_Title: {
    type: String,
    required: true
  },
  Facillity_Category: {
    type: String,
    required: true
  },
  Facillity_Description: {
    type: String,
    required: true
  },
  Facillity_Adderess: {
    type: String,
    required: true
  },
  Facillity_Latitude: {
    type: Number,
    required: true
  },
  Facillity_Longitude: {
    type: Number,
    required: true
  },
  facillity_Postcode: {
    type: Number,
    required: true
  },
  Facillity_Status: {
    type: String,
  },
  Facillity_Image: {
    type: String,
    required: true
  }

});
module.exports = mongoose.model("Facillity", FacillitesSchema);

