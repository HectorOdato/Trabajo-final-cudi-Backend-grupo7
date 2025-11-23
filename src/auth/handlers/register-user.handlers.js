import ErrorHandler from "../../shared/errors/handle-error.js";
import handleHttpError from "../../shared/errors/handle-http-error.js";
import { comparePassword } from "../../shared/utils/handler-password.util.js";
import { findUserByProp } from "../repository/user.repository.js";
import {
  generateAccessToken,
  generateRefreshToken
} from "../../shared/utils/generate-token.util.js";

const loginHandler = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Buscar usuario por email
    const user = await findUserByProp({ email });

    // Comparar contraseñas
    const isMatch = await comparePassword(password, user.password);
    if (!isMatch) {
      throw new ErrorHandler("INVALID_PASSWORD", 401);
    }

    // Generar tokens
    const payload = {
      name: user.name,
      role: user.role,
    };

    const accessToken = generateAccessToken(payload);
    const refreshToken = generateRefreshToken(payload);

    res.status(200).json({
      message: "Login exitoso",
      accessToken,
      refreshToken,
    });

  } catch (error) {
    console.log("Error capturado:", error);
    handleHttpError(res, error);
  }
};

export default loginHandler;


