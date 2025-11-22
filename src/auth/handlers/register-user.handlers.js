import ErrorHandler from "../../shared/errors/handle-error.js";
import handleHttpError from "../../shared/errors/handle-http-error.js";
import { encryptPassword } from "../../shared/utils/handler-password.util.js";
import { findUserByProp, registerUser } from "../repository/user.repository.js";

const registerHandler = async (req, res) => {
  try {
    const user = req.body;

    // Verificar email existente
    const existingEmail = await findUserByProp({ email: user.email });
    if (existingEmail) {
      throw new ErrorHandler("USER_ALREADY_EXISTS", 400);
    }

    // Verificar username (si existe en el payload)
    if (user.username) {
      const existingUsername = await findUserByProp({ username: user.username });
      if (existingUsername) {
        throw new ErrorHandler("USER_ALREADY_EXISTS", 400);
      }
    }

    // Hashear contraseña
    user.password = await encryptPassword(user.password);

    // Crear usuario en BD
    const newUser = await registerUser(user);

    res.status(201).json({
      message: "Usuario creado con éxito",
      data: {
        id: newUser._id,
        name: newUser.name,
        lastname: newUser.lastname,
        email: newUser.email,
        phone: newUser.phone,
        role: newUser.role,
        createdAt: newUser.createdAt,
      },
    });

  } catch (error) {
    handleHttpError(res, error);
  }
};

export default registerHandler;

