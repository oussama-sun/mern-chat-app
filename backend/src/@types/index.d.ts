import mongoose, { InferSchemaType } from "mongoose";
import { userSchema } from "../models/User";

interface User extends InferSchemaType<typeof userSchema> {}

declare module "express-session" {
  interface SessionData {
    userId?: mongoose.Types.ObjectId;
  }
}
