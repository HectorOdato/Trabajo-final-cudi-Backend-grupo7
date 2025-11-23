import dotenv from "dotenv";
dotenv.config();

export const JWT_ACCESS = process.env.JWT_ACCESS || "default_access_secret";
export const JWT_ACCESS_EXPIRES_IN = process.env.JWT_ACCESS_EXPIRES_IN || "1h";

export const JWT_REFRESH = process.env.JWT_REFRESH || "default_refresh_secret";
export const JWT_REFRESH_EXPIRES_IN = process.env.JWT_REFRESH_EXPIRES_IN || "7d";
