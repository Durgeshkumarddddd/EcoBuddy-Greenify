const mongoose = require("mongoose");
// feedback schema
const FeedbackSchema = new mongoose.Schema({
  Feedback_Rating: {
    type: Number,
    required: true,
    min: 0,
    max: 5,
  },
  Feedback_Message: {
    type: String,
    required: true,
    maxlength: 500,
  },
  Feedback_Date: {
    type: Date,
    default: Date.now,
  },
  facilityId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Facility',
    required: true
  }
});

module.exports = mongoose.model("Feedback", FeedbackSchema);
