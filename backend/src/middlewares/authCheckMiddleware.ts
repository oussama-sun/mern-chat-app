import { RequestHandler } from "express";
import createHttpError from "http-errors";

export const authCheckMiddlware: RequestHandler = (req, res, next) => {
  try {
    if (req.user) {
      next();
    } else {
      createHttpError(401, "you must login first.");
    }
  } catch (error) {
    console.log(error);
  }
};
