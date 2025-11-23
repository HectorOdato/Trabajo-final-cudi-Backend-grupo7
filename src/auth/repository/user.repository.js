import UserModel from "../models/user.models.js";
import { encryptPassword } from "../../shared/utils/handler-password.util.js";

/**
 * Crear usuario (REGISTER)
 */
export const registerUser = async (userData) => {
  // Hashear contraseña antes de guardar
  const hashedPassword = await encryptPassword(userData.password);
  userData.password = hashedPassword;

  // Crear usuario
  const user = await UserModel.create(userData);

  // No devolver password nunca
  user.set("password", undefined, { strict: false });

  return user;
};

/**
 * Buscar usuario por propiedad (LOGIN usa esto)
 */
export const findUserByProp = async (prop) => {
  return await UserModel
    .findOne(prop)
    .select("+password") // incluir password aunque esté oculto en el schema
    .select("name lastname phone email role"); // demás campos visibles
};


