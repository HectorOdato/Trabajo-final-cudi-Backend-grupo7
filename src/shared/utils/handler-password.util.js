import bcrypt from "bcrypt";
import ErrorHandler from "../errors/handle-error.js"; // AJUSTÁ EL PATH SI ES NECESARIO

export const encryptPassword = async (passwordPlain) => {
  return await bcrypt.hash(passwordPlain, 10);
};

export const comparePassword = async (passwordPlain, hashPassword) => {
  const check = await bcrypt.compare(passwordPlain, hashPassword);
  
  if (!check) {
    throw new ErrorHandler("INVALID_PASSWORD", 401);
  }

  return true;
};
