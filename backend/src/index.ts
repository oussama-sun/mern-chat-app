import express from "express";
import { CLIENT_URL, MONGO_URI, PORT, SECRET } from "./utils/validateEnv";
import cors from "cors";
import helmet from "helmet";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import expressSession from "express-session";
import mongoose from "mongoose";
import passport from "passport";
import "./libs/passport-config";
import createHttpError from "http-errors";
import ErrorHandlerMiddleware from "./middlewares/ErrorHandlerMiddleware";
import Routes from "./routes/routes";
import MongoStore from "connect-mongo";

// Create an instance of the Express application
const app = express();

// Connect to the MongoDB database
mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log(`mongoose is connected.`);
  })
  .catch((err) => {
    console.error(err);
  });

// Set up middleware and application configuration

// Enable Cross-Origin Resource Sharing (CORS) with specified origin and credentials
app.use(cors({ origin: CLIENT_URL, credentials: true }));

// Add security headers using Helmet middleware
app.use(helmet());

// Parse cookies using cookie-parser middleware
app.use(cookieParser());

// Set up the Express session with session storage in MongoDB
app.use(
  expressSession({
    secret: SECRET,
    cookie: { maxAge: 1 * 24 * 60 * 60 * 1000 }, // Set session cookie expiration
    store: MongoStore.create({ mongoUrl: MONGO_URI }), // Use MongoDB to store sessions
  })
);

// Parse JSON and URL-encoded request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Initialize Passport.js for authentication
app.use(passport.initialize());
app.use(passport.session());

// Define your application routes using the "Routes" middleware
app.use("/", Routes);

// Handle requests to non-existent routes with a 404 error
app.use("/", (_, __, next) => {
  next(createHttpError(404, "This endpoint does not exist."));
});

// Use the custom error handling middleware
app.use(ErrorHandlerMiddleware);

// Start the Express server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
