import ErrorHandler from "../../shared/errors/handle-error.js";
import handleHttpError from "../../shared/errors/handle-http-error.js";
import { registerUser, findUserByProp } from "../repository/user.repository.js";
import { encryptPassword } from "../../shared/utils/handler-password.util.js";

const registerHandler = async (req, res) => {
  try {
    const { name, lastname, phone, email, password } = req.body;

    // verificar si ya existe
    const existing = await findUserByProp({ email });
    if (existing) {
      throw new ErrorHandler("El email ya está registrado", 400);
    }

    // registrar usuario
    const newUser = await registerUser({
      name,
      lastname,
      phone,
      email,
      password
    });

    res.status(201).json({
      message: "Usuario creado correctamente",
      user: newUser
    });

  } catch (error) {
    console.log("Error capturado:", error);
    handleHttpError(res, error);
  }
};
export default registerHandler;