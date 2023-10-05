import express from "express";
import { AuthRouter } from "./auth/router";

const Routes = express.Router();

Routes.use("/api/v1/auth", AuthRouter);

export default Routes;
