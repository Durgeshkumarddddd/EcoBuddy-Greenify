const express = require('express');
const router = express.Router({ mergeParams: true });
const connectionDatbase = require("../config/mongoose");
const dataconnect = require("../model/Facillites");
const Review = require('../model/Feedback')
const CarbonModel = require('../model/carbonFootPrint');

const multer = require("multer");
const { storage } = require("../cloudConfig");  // Make sure this path is correct
const upload = multer({ storage });

// Data from CarbonFoot print Data
router.get('/carbondata', async(req, res)=>{
  const CarbonAllData = await CarbonModel.find({});
  res.render('listings/carbonFoot', {CarbonAllData});
})

// faciliateshow route
router.get("/facilitate", async (req, res) => {
  try {
    const facilities = await dataconnect.find();
   
    const reviews = await Review.find();
    res.render("listings/facilityshow.ejs", { facilities, reviews });
  } catch (error) {
    req.flash("error", "Error deleting facility.");
    res.redirect('/facilitate');
  }
});

// faciliate create route
router.get("/facilitatecreate", (req, res) => {
  res.render("listings/facilitycreate.ejs");
});

// for create data
router.post("/facilitatecreate", upload.single("facility[Facillity_Image]"), async (req, res) => {
  try {
    // Get all form fields
    const facilityData = req.body.facility;

    // Add Cloudinary image URL to data
    if (req.file) {
      facilityData.Facillity_Image = req.file.path; // Cloudinary image URL
    }

    // Save to MongoDB
    const newFacility = new dataconnect(facilityData);
    await newFacility.save();

    req.flash("success", "✅ New facility added successfully!");
    res.redirect("/facilitate");
  } catch (error) {
    console.error("❌ Error adding facility:", error);
    res.status(500).render("listings/error.ejs");
  }
});

// Route to show specific facility details with reviews
router.get("/facilitate/:id", async (req, res) => {
  try {
    const facility = await dataconnect.findById(req.params.id);
    const reviews = await Review.find({ facilityId: req.params.id });
    if (!facility) {
      return res.status(404).render("listings/error.ejs", { message: "Facility not found!" });
    }
    req.flash('succes', "Successfully edited")
    res.render("./listings/facilityspec.ejs", { facility, reviews });
  } catch (error) {
    req.flash("error", "Error deleting facility.");
    res.redirect('/facilitate');
  }
});

// Route to edit a specific facility
router.get("/facilitate/edit/:id", async (req, res) => {
  try {
    const facility = await dataconnect.findById(req.params.id);
    const reviews = await Review.find({ facilityId: req.params.id });

    if (!facility) {
      return res.status(404).render("listings/error.ejs", { message: "Facility not found for editing!" });
    }
    res.render("listings/facilityedit.ejs", { facility, reviews });
  } catch (error) {
    req.flash("error", "Error deleting facility.");
    res.redirect('/facilitate');
  }
});
// ROUTE TO UPDATE FACILITY
router.post('/facilitate/update/:id', async (req, res) => {
  try {
    const facilityId = req.params.id;
    const {
      Facillity_Title,
      Facillity_Description,
      Facillity_Category, 
      Facillity_Adderess,
      Facillity_Status,
      Facillity_Image,
    } = req.body;

    const updatedFacility = await dataconnect.findByIdAndUpdate(facilityId, {
      Facillity_Title,
      Facillity_Description,
      Facillity_Category,
      Facillity_Adderess,
      Facillity_Status,
      Facillity_Image,
    }, { new: true });

    if (!updatedFacility) {
      req.flash("error", "Facility not found!");
      return res.redirect("/facilitate");
    }
    req.flash("success", "Update Successful!");
    res.redirect(`/facilitate/${updatedFacility._id}`);
  } catch (error) {
    req.flash("error", "Server error. Please try again later.");
    res.redirect("/facilitate");
  }
});


// Route to Delete a specific facility
router.delete('/facilitate/delete/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const deletedFacility = await dataconnect.findByIdAndDelete(id);

    if (!deletedFacility) {
      req.flash("error", "Facility not found!");
      return res.redirect('/facilitate');
    }
    req.flash("success", "Deletion Successful!");
    res.redirect('/facilitate');
  } catch (error) {
    req.flash("error", "Error deleting facility.");
    res.redirect('/facilitate');
  }
});
module.exports = router