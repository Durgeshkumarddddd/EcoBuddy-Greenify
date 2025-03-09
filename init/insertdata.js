const mongoose = require('mongoose');
const connection = require('../config/mongoose.js')
const initialdata = require('./data.js');
const seconddata = require('./DATA2.JS');
const User = require('../model/Facillites.js');
const CarbonPrintModel = require('../model/carbonFootPrint.js');
const CarbonPrintDb = require('./CarbonFootPrint.js');
const CardModel = require('../model/Card.js')
const CardData = require('./CardDb.js')

// User.insertMany(initialdata);
// User.insertMany(seconddata);
// CarbonPrintModel.insertMany(CarbonPrintDb);
CardModel.insertMany(CardData);
console.log("Data is inserted")