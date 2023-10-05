import { RequestHandler } from "express";
import createHttpError from "http-errors";
import { User, userModel } from "../../../models/User";
import { hashSync } from "bcrypt";
import { CLIENT_URL, SALT } from "../../../utils/validateEnv";
import express from "express";

// Define the RegisterRequest interface, extending the User interface with a password field
interface RegisterRequest extends User {
  password: string;
}

// Route handler for testing purposes
const Test: RequestHandler = (req, res, next) => {
  try {
    // Access the user ID from the session, if available
    req.session.userId;
    // Respond with a JSON object containing the session for testing
    res.json({ test: req.session });
  } catch (error) {
    // Pass any errors to the error handling middleware
    next(error);
  }
};

// Route handler for user logout
const Logout: RequestHandler = (req, res, next) => {
  try {
    // Log the user out and handle any potential errors
    req.logOut((err) => {
      if (err) throw createHttpError(err);
      res.json("logout");
      // Check if the user is still authenticated after logging out
      req.isAuthenticated();
    });
    console.log("logout");
  } catch (error) {
    console.error(error);
  }
};

// Route handler for accessing the user's profile
const Profile: RequestHandler = (req, res, next) => {
  try {
    // Retrieve the user from the request object
    const user = req.user;
    console.log("profile user if ::::", user);
    console.log("The final session is :", req.session);
    if (user) {
      // Extract relevant user data and respond with it
      const { email, userName, avatar_url, id } = user;
      res.json({ email, userName, avatar_url, id });
    } else {
      // If no user is found, throw a 401 Unauthorized error
      throw createHttpError(401, "You must log in first.");
    }
  } catch (error) {
    // Pass any errors to the error handling middleware
    next(error);
  }
};

// Export the route handlers for use in your application
export { Logout, Profile, Test };
