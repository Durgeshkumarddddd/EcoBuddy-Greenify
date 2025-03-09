const mongoose = require('mongoose')

const Schema = new mongoose.Schema({
    activity : {
        type : String,

    },
    unit : {
        type : String,
    },
    emissions_g_co2e : {
        type : Number,
    }

});

module.exports = mongoose.model("CarbonPrint", Schema);