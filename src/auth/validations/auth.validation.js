import { body } from "express-validator";
import validationMiddleware from "../../shared/middlewares/validation.middleware.js";

export const registerUserValidation = [
  body("username").isString().withMessage("El username debe ser un string"),
  body("phone").isNumeric().withMessage("El teléfono debe ser un número"),
  body("email").isEmail().withMessage("El email debe ser válido"),
  body("password").isLength({ min: 8 }).withMessage("La contraseña debe tener al menos 8 caracteres"),
  (req, res, next) => validationMiddleware(req, res, next),
]

export const loginUserValidation = [
  body("email").isEmail().withMessage("El email debe ser válido"),
  body("password").isLength({ min: 8 }).withMessage("La contraseña debe tener al menos 8 caracteres"),
  (req, res, next) => validationMiddleware(req, res, next),
]