// Import necessary dependencies and controllers
import { Router } from "express";
import { Logout, Profile, Test } from "./controllers";
import passport from "passport";
import { CLIENT_URL } from "../../utils/validateEnv";

// Create an instance of the Express Router
const AuthRouter = Router();

// Define routes and associated controllers/handlers

// Route for testing authentication (just a placeholder)
AuthRouter.post("/test", Test);

// Route for user logout
AuthRouter.get("/logout", Logout);

// Route for accessing user profile
AuthRouter.get("/profile", Profile);

// Route for initiating Google OAuth authentication
AuthRouter.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

// Callback route for handling Google OAuth authentication callback
AuthRouter.get(
  "/google/callback",
  passport.authenticate("google", {
    // Redirect to the dashboard on successful authentication
    successRedirect: CLIENT_URL + "/dashboard",

    // Redirect to the login page on authentication failure
    failureRedirect: CLIENT_URL + "/login",
  })
);

// Export the AuthRouter for use in other parts of the application
export { AuthRouter };
