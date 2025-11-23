import { generateAccessToken, generateRefreshToken } from "../../shared/utils/generate-token.util.js";
import { comparePassword } from "../../shared/utils/handler-password.util.js";
import { findUserByProp } from "../repository/user.repository.js";
import ErrorHandler from "../../shared/errors/handle-error.js";
import handleHttpError from "../../shared/errors/handle-http-error.js";

const loginHandler = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Buscar usuario por email
    const user = await findUserByProp({ email });
    if (!user) {
      throw new ErrorHandler("EMAIL_OR_PASSWORD_INVALID", 400);
    }

    // Comparar password
    // Comparar contraseñas
    await comparePassword(password, user.password);


    // Payload del token
    const payload = {
      id: user._id,
      name: user.name,
      role: user.role,
      email: user.email,
    };

    // Generar tokens
    const accessToken = generateAccessToken(payload);
    const refreshToken = generateRefreshToken(payload);

    res.status(200).json({
      message: "Login exitoso",
      accessToken,
      refreshToken,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role
      }
    });

  } catch (error) {
    console.log("Error en login:", error);
    handleHttpError(res, error);
  }
};

export default loginHandler;
