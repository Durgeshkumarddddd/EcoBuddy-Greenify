const express = require('express');
const router = express.Router({ mergeParams: true });
const connectionDatbase = require("../config/mongoose");
const dataconnect = require("../model/Facillites");
const Review = require('../model/Feedback')
const CarbonModel = require('../model/carbonFootPrint');

// Data from CarbonFoot print Data
router.get('/carbondata', async(req, res)=>{
  const CarbonAllData = await CarbonModel.find({});
  res.render('listings/carbonFoot', {CarbonAllData});
})

// faciliateshow route
router.get("/facilitate", async (req, res) => {
  try {
    console.log("Fetching facilities for /facilitate route");
    const facilities = await dataconnect.find();
    console.log(facilities);
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
router.post("/facilitatecreate", async (req, res) => {
  try {
    let newfacility = await new dataconnect(req.body.facility)
    await newfacility.save();
    req.flash("success", "you added new item")
    res.redirect("/facilitate")
  } catch (error) {
    console.error("Error fetching facilities:", error);
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