
const express = require('express');
const router = express.Router({ mergeParams: true });

// home

router.get("/home", (req, res) => {
  res.render("listings/home.ejs")
})
// about route
router.get("/about", (req, res) => {
  res.render("listings/about.ejs");
})

// for blog
router.get("/blog", (req, res) => {
  res.render("listings/blog.ejs");
});
// for FAQ
router.get("/FAQ", (req, res) => {
  res.render("listings/FAQ.ejs");
})
// for contact 
router.get("/contact", (req, res) => {
  res.render("listings/contact.ejs");
});
// for all operation of management portal
// for manageportal 
router.get("/manageportal", (req, res) => {
  res.render("listings/manageportal.ejs");
});
// for active users
router.get("/manage-users", (req, res) => {
  res.render("listings/manage-users.ejs");
})
// for view-reports
router.get("/view-reports", (req, res) => {
  res.render("listings/view-reports.ejs")
})
// for track projects
router.get("/track-projects", (req, res) => {
  res.render("listings/track-projects.ejs")
})
// for settings
router.get("/settings", (req, res) => {
  res.render("listings/setting.ejs")
})
// for privacy-policy
router.get("/privacy-policy", (req, res) => {
  res.render("listings/privacy-policy.ejs")
})
// for terms-of-service
router.get("/terms-of-service", (req, res) => {
  res.render("listings/terms-of-service.ejs")
})
// for make-money
router.get("/make-money", (req, res) => {
  res.render("listings/make-money.ejs")
})

module.exports = router