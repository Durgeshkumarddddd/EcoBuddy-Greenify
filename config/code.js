

// google authentication
// require userSchema from model folder for google auth
// const googleoauthuser = require('./model/oauthusergoogle');
// googlestrategy
// const GoogleStrategy = require('passport-google-oauth20').Strategy;


// passport.use(
//   new GoogleStrategy({
//     clientID: process.env.GOOGLE_CLIENT_ID,
//     clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//     callbackURL: "http://localhost:8080",
//   },
//     async (accessToken, refreshToken, profile, done) => {
//       try {

//         let user = await User.findOne({ googleId: profile.id });
//         if (!user) {

//           user = new User({
//             googleId: profile.id,
//             displayName: profile.displayName,
//             email: profile.emails[0].value,
//             photo: profile.photos[0].value,
//           });
//           await user.save();
//         }
//         return done(null, user);
//       } catch (err) {
//         console.error("Error during user authentication:", err);
//         return done(err, null);
//       }
//     }
//   )

// );
// serialize user from the session


app.get("/authgoogle", (req, res) => {
    res.send("<a href='/auth/google'>Login with Google</a>");
  });
  
  app.get("/auth/google", passport.authenticate('google', { scope: ["profile", "email"] }));
  
  app.get("/auth/google/callback", passport.authenticate('google', { failureRedirect: "/authgoogle" }),
    (req, res) => {
      res.redirect("/profile");
    }
  );
  