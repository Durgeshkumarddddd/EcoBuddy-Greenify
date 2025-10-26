const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const dburl = process.env.ATLASDB_URL;

const User = require('../model/Facillites.js');
const CarbonPrintModel = require('../model/carbonFootPrint.js');
const CardModel = require('../model/Card.js');

const initialdata = require('./data.js');
const seconddata = require('./DATA2.jS');
const CarbonPrintDb = require('./CarbonFootPrint.js');
const CardData = require('./CardDb.js');

async function insertData() {
    try {
        // 1️⃣ Connect to MongoDB Atlas
        await mongoose.connect(dburl, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('✅ Connected to MongoDB Atlas');

        // 2️⃣ Insert data after successful connection
        await User.insertMany(initialdata);
        await User.insertMany(seconddata);
        await CarbonPrintModel.insertMany(CarbonPrintDb);
        await CardModel.insertMany(CardData);

        console.log('🎉 All data inserted successfully!');
    } catch (err) {
        console.error('❌ Error inserting data:', err);
    } finally {
        // 3️⃣ Close connection after insert
        await mongoose.connection.close();
        console.log('🔒 Connection closed');
    }
}

// Run the function
insertData();
