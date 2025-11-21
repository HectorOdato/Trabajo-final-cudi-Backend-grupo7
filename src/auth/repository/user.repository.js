import ErrorHandler from "../../shared/errors/handle-error.js";
import UserModel from "../models/user.models.js";

/**
 * Registra un nuevo usuario en la base de datos
 * @param {object} userData Información del usuario a guardar
 * @returns {object} User Retorna el usuario registrado con la password truncada
  */
export const registerUser = async userData => {
  const user = await UserModel.create(userData);

  // Se elimina el password de la respuesta para evitar que se muestre
  user.set('password', undefined, { stric: false });

  return user;
}

/**
 * Busca un usuario en la base de datos según la propiedad proporcionada
 * @param {string} prop Propiedad que se utiliza para buscar un usuario
 * @returns {object} User Retorna el usuario encontrado
 */
export const findUserByProp = async prop => {
  const user = await UserModel
    .findOne({ prop })
    .select('password name role email'); // is necessary, otherwise password returns undefined

  if (!user) {
    throw new ErrorHandler('USER_NOT_EXISTS', 404);
  }

  return user;
};