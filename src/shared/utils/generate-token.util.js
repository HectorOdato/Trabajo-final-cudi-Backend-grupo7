import jwt from "jsonwebtoken"
import { JWT_ACCESS, JWT_ACCESS_EXPIRES_IN, JWT_REFRESH, JWT_REFRESH_EXPIRES_IN } from "../constansts/constants.js"


export const generateAccessToken = payload => {
  return jwt.sign(payload, JWT_ACCESS, { expiresIn: JWT_ACCESS_EXPIRES_IN })
}

export const generateRefreshToken = payload => {
  return jwt.sign(payload, JWT_REFRESH, { expiresIn: JWT_REFRESH_EXPIRES_IN })
}