import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } from "../utils/validateEnv";
import { userModel } from "../models/User";

// Configure Passport to use Google OAuth2.0 authentication strategy
passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "/api/v1/auth/google/callback", // Callback URL for Google OAuth
    },
    async function (accessToken, refreshToken, profile, done) {
      try {
        console.log("profile is ::::", profile);

        // Extract relevant data from the Google profile
        const {
          sub: googleID,
          picture: avatar_url,
          name: userName,
          email,
        } = profile._json;

        // Check if the user already exists in the database
        const user = await userModel.findOne({ email });
        if (user) {
          // If the user exists, return their details
          const { email, userName, avatar_url, googleID } = user;
          done(null, {
            avatar_url,
            googleID,
            userName,
            email,
            id: user._id.toString(),
          });
        } else {
          // If the user doesn't exist, create a new user in the database
          const user = await userModel.create({
            avatar_url,
            googleID,
            userName,
            email,
          });

          // Return the newly created user's details
          done(null, {
            avatar_url,
            googleID,
            userName,
            email,
            id: user._id.toString(),
          });
        }
      } catch (error) {
        console.log(error);
      }
    }
  )
);

// Serialize the user into a session
passport.serializeUser(async (user, done) => {
  try {
    console.log("serializeUser : ", user);

    // Serialize the user by their ID
    const { id } = user;
    done(null, id);
  } catch (error) {
    console.error(error);
  }
});

// Deserialize the user from a session
passport.deserializeUser(async (id, done) => {
  try {
    console.log("deserializeUser : ", id);

    // Deserialize the user by their ID and retrieve their details from the database
    const user = await userModel.findById(id);
    if (user) {
      done(null, {
        avatar_url: user?.avatar_url,
        googleID: user?.googleID,
        userName: user?.userName,
        email: user?.email,
        id: user?._id.toString(),
      });
    } else {
      done(null);
    }
  } catch (error) {
    console.error(error);
  }
});
