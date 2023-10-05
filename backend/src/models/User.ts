import { InferSchemaType, model, Schema } from "mongoose";

export const userSchema = new Schema({
  userName: { type: String, unique: true, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String },
  avatar_url: { type: String },
  googleID: { type: String, unique: false },
});

export interface User extends InferSchemaType<typeof userSchema> {}

export const userModel = model<User>("user", userSchema);
