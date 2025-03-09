
const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/ecobuddy')
const db = mongoose.connection

db.on('err', err => {
  console.log(err)
});
db.on("open", () => {
  console.log("connected to database");
});

module.exports = db;