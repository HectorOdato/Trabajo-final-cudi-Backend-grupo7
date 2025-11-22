import UserModel from "../models/user.models.js";

export const registerUser = async userData => {
  const user = await UserModel.create(userData);

  // Ocultar password antes de retornar
  user.set('password', undefined, { strict: false });

  return user;
};

export const findUserByProp = async prop => {
  const user = await UserModel
    .findOne(prop) // ← FIX IMPORTANTE
    .select('password name role email phone lastName');

  return user; // Si no existe devuelve null (no debería tirar error acá)
};
