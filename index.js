const express = require('express');
const app = express();
const port = 8080;


// Passport Configuration
require('dotenv').config();
// Database connection
const connectionDatbase = require("./config/mongoose");

// Routers
const listingsRouter = require('./router/facility.js');
const ReviewRouter = require('./router/review.js');
const navigateRoute = require('./router/navigateRoute.js');
<<<<<<< HEAD
// for porduct 
const productRouter = require('./router/product.js');
=======
>>>>>>> d1dec281589ea32a1fe41c6690266effce41e6ac
const userRouter = require('./router/user.js');
const passportLocalMongoose = require('passport-local-mongoose');
const passport = require('passport');
const methodOverride = require('method-override');
// Path & Models
const path = require('path');
const dataconnect = require("./model/Facillites");
const Review = require('./model/Feedback');
const User = require('./model/users'); // Fixed Missing User Model Import
const LocalStrategy = require("passport-local");
// Cookie Parser Middleware
const cookieParser = require('cookie-parser');
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(methodOverride("_method"));
// Static Files & View Engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

// Templating Engine
const ejsMate = require("ejs-mate");
app.engine("ejs", ejsMate);

// Session & Flash
const session = require("express-session");
const flash = require("connect-flash");
app.use(session({
  secret: 'secretKeyword',
  resave: false,
  saveUninitialized: true,
  cookie: {
    expires: Date.now() + 7 * 24 * 60 * 60 * 100,
    maxAge: 7 * 24 * 60 * 60 * 100,
    httpOnly: true,
  }
}));


// Middleware



app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
app.use(flash());
// Flash Messages Middleware
app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  res.locals.CurrUser = req.user;
  next();
});

// Routers
app.use('/', listingsRouter);
app.use('/', ReviewRouter);
<<<<<<< HEAD
app.use('/', productRouter); // Added Product Router
=======
>>>>>>> d1dec281589ea32a1fe41c6690266effce41e6ac
app.use('/', userRouter);
app.use('/navigate', navigateRoute);

// Default Route
app.get("/", (req, res) => {
  res.render("listings/home.ejs");
});

// Profile Route
app.get("/profile", (req, res) => {
  if (req.isAuthenticated()) {
    res.send(`
      <h1>Welcome, ${req.user.displayName}</h1>
      <img src="${req.user.photo}" alt="Profile Picture">
      <p>Email: ${req.user.email}</p>
      <a href="/logout">Logout</a>
    `);
  } else {
    res.redirect("/");
  }
});

// Logout Route

app.get("/logout", (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    res.redirect("/login");
  });
});

// Register Route
app.get("/register", (req, res) => {
  res.render("users/register.ejs");
});

// Login Route
app.get("/login", (req, res) => {
  res.render("users/login.ejs");
});

// 404 Page Not Found
app.get('*', (req, res) => {
  res.render("listings/error.ejs");
});

// Global Error Handler
app.use((err, req, res, next) => {
  let { statusCode = 500, message = 'Something went wrong' } = err;
  res.status(statusCode).render("listings/error", { message });
});

// Server Starting
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
