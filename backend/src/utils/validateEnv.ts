import { configDotenv } from "dotenv";
import { cleanEnv, num, str } from "envalid";

configDotenv();

export const {
  CLIENT_URL,
  GITHUB_CLIENT_ID,
  GITHUB_CLIENT_SECRET,
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  MONGO_URI,
  PORT,
  SECRET,
  isDev,
  SALT,
} = cleanEnv(process.env, {
  PORT: num(),
  SALT: num(),
  SECRET: str(),
  MONGO_URI: str(),
  CLIENT_URL: str(),
  GOOGLE_CLIENT_ID: str(),
  GOOGLE_CLIENT_SECRET: str(),
  GITHUB_CLIENT_ID: str(),
  GITHUB_CLIENT_SECRET: str(),
});
