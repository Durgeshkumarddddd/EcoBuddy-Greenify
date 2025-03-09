const express = require('express')
const router = express.Router()
const passport = require('passport');
const User = require('../model/users');

router.get('/signup',  (req, res)=>{
    res.render("users/register.ejs")
})


// Register
router.post('/register', async (req, res, next) => {
    try {
        const { fullname, username, email } = req.body.register;

        // Ensure password is treated as a string
        const password = Array.isArray(req.body.register.password)
            ? req.body.register.password[0]  // Extract the first element if it's an array
            : req.body.register.password;

        if (!password || typeof password !== 'string') {
            req.flash("error", "Invalid password format.");
            return res.redirect('/register');
        }

        const newUser = new User({ fullname, username, email });
        const registerUser = await User.register(newUser, password);

        req.login(registerUser, (err) => {
            if (err) return next(err);

            req.flash("success", "Registration Successful! Welcome to Eco Buddy!");
            res.redirect('/');
        });
    } catch (err) {
        req.flash("error", err.message);
        res.redirect('/register');
    }
});



router.get('/login', (req, res)=>{
    res.render("users/login.ejs")
})

router.post('/login', passport.authenticate("local", {failureRedirect: '/login', failureFlash: true }), (req, res)=>{
    res.redirect('/');
})

router.get('/logout', (req, res,next)=>{
    req.logout((err)=>{
        if(err){
          next(err)
        }

       req.flash("success", "Logged out you !")
       res.redirect('/')
   })
})



module.exports = router ;