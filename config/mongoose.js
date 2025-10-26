

const mongoose = require("mongoose");
// For store data in Atlas database
let dburl = process.env.ATLASDB_URL;
// mongoose.connect('mongodb://localhost:27017/ecobuddy')
async function main() {
  await mongoose.connect(dburl);

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
const db = mongoose.connection

db.on('err', err => {
  console.log(err)
});
db.on("open", () => {
  console.log("connected to database");
});

module.exports = db;