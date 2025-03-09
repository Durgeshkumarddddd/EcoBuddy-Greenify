const express = require('express');
const router = express.Router({ mergeParams: true });
const connectionDatbase = require("../config/mongoose");
const Product=require("../model/Card")
router.get('/product', async(req,res)=>{
    try{
        const environmentalProducts = await Product.find({}); // Replace with your model name and query
        res.render('listings/product.ejs',{environmentalProducts});
    }
    catch(error){
        console.log(error);
        res.render('/');
    }
});
module.exports = router;