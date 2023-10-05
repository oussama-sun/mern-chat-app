import { ErrorRequestHandler } from "express";
import { isHttpError } from "http-errors";
import { isDev } from "../utils/validateEnv";
const ErrorHandlerMiddleware: ErrorRequestHandler = (error, req, res, nex) => {
  let statusCode = 500;
  let errorMessage = "an unknown error occurred.";
  console.error(error);
  if (isHttpError(error)) {
    statusCode = error.statusCode;
    errorMessage = error.message;
  } 
  res.status(statusCode);
  res.json({ error: errorMessage, stack: isDev ? error.stack : null });
};
export default ErrorHandlerMiddleware;
