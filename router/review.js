const express = require('express');
const router = express.Router();
const connectionDatbase = require("../config/mongoose");
const Review = require('../model/Feedback')


// route for review
router.post('/facilitate/reviews/:id', async (req, res) => {


  try {
    const { rating, comment } = req.body;

    // Ensure that both rating and comment are provided
    if (!rating || !comment) {
      req.flash("error", "Both rating and comment are required!");
      return res.redirect(`/facilitate/${req.params.id}`);
    }

    const newReview = new Review({
      Feedback_Rating: rating,
      Feedback_Message: comment,
      facilityId: req.params.id
    });

    await newReview.save();
    req.flash("success", "Review added successfully!");
    res.redirect(`/facilitate/${req.params.id}`);
  } catch (error) {
    console.error('Error adding review:', error);
    req.flash("error", "Server error. Please try again later.");
    res.redirect(`/facilitate/${req.params.id}`);
  }
});



// edit review
router.get('/facilitate/:facilityId/reviews/:reviewId/edit', async (req, res) => {
  try {
    const { facilityId, reviewId } = req.params;
    const review = await Review.findById(reviewId);

    if (!review) {
      req.flash("error", "Review not found!");
      return res.redirect(`/facilitate/${facilityId}`);
    }

    res.render('listings/editReview.ejs', { review, facilityId });
  } catch (error) {
    console.error('Error fetching review for edit:', error);
    req.flash("error", "Server error. Please try again later.");
    res.redirect(`/facilitate/${req.params.facilityId}`);
  }
});

// update review
router.post('/facilitate/:facilityId/reviews/:reviewId', async (req, res) => {
  try {
    const { facilityId, reviewId } = req.params;
    const { rating, comment } = req.body;
    const updatedReview = await Review.findByIdAndUpdate(
      reviewId,
      { Feedback_Rating: rating, Feedback_Message: comment },
      { new: true }
    );

    if (!updatedReview) {
      req.flash("error", "Review not found!");
      return res.redirect(`/facilitate/${facilityId}`);
    }
    req.flash("success", "Your review was successfully updated!");
    res.redirect(`/facilitate/${facilityId}`);
  } catch (error) {
    console.error('Error updating review:', error);
    req.flash("error", "Server error. Please try again later.");
    res.redirect(`/facilitate/${facilityId}`);
  }
});

// Delete review
router.delete('/facilitate/:facilityId/reviews/:reviewId', async (req, res) => {
  try {
    const { facilityId, reviewId } = req.params;

    const deletedReview = await Review.findByIdAndDelete(reviewId);

    if (!deletedReview) {
      req.flash("error", "Review not found!");
      return res.redirect(`/facilitate/${facilityId}`);
    }
    req.flash("success", "Your review was successfully deleted!");
    res.redirect(`/facilitate/${facilityId}`);
  } catch (error) {
    console.error('Error deleting review:', error);
    req.flash("error", "Server error. Please try again later.");
    res.redirect(`/facilitate/${facilityId}`);
  }
});

module.exports = router