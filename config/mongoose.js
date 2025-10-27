const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const dburl = process.env.ATLASDB_URL; // load Atlas URL from .env

mongoose.connect(dburl)
  .then(() => console.log("✅ Connected to MongoDB Atlas (App)"))
  .catch(err => console.error("❌ MongoDB connection error:", err));

module.exports = mongoose.connection;
