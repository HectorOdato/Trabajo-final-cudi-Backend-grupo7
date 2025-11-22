import { body } from "express-validator";
import validationMiddleware from "../../shared/middleweres/middlewere.js";

export const registerUserValidation = [
  body("name").isString().withMessage("El nombre debe ser un string"),
  body("lastname").isString().withMessage("El apellido debe ser un string"), // ← FIX
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