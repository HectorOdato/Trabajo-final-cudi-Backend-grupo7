import bcrypt from "bcrypt"

export const encryptPassword = async passwordPlain => {
  const hash = await bcrypt.hash(passwordPlain, 10);
  return hash;
};

export const comparePassword = async (passwordPlain, hashPassword) => {
  // return await bcrypt.compare(passwordPlain, hashPassword);
  const check = await bcrypt.compare(passwordPlain, hashPassword);
  if (!check) {
    handleError("PASSWORD_INVALID", 401)
    return
  }
};