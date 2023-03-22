var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.serializeUser((user, done) => {
    done(null, user.id);
})

passport.deserializeUser((user, done) => {
    done(null, user);
})

passport.use(new GoogleStrategy({
    clientID: '1002751974154-jh7ov9iogojk3ojdm3fod65dssuk425h.apps.googleusercontent.com',
    clientSecret: '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',
    callbackURL: "http://localhost:9000/google/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    // Register user here.
    console.log(profile);
    cb(null, profile);
  }
));
