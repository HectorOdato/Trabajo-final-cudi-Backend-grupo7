import { body, param } from "express-validator"
import validationMiddleware from "../../shared/middleweres/middlewere.js"

export const categoryBodyValidation = [
    body('name')
    .trim()
    .notEmpty()
    .withMessage('El nombre es requerido')
    .isLength({ max: 20 })
    .withMessage('El nombre no puede exceder 20 caracteres'),

    body('description')
    .trim()
    .notEmpty()
    .withMessage('La descripción es requerida'),

    body('active')
    .optional()
    .isBoolean()
    .withMessage('Active debe ser un valor booleano'),

    (req, res, next) => validationMiddleware(req, res, next),
]

export const categoryParamValidation = [
    param("id").isMongoId(),
    (req, res, next) => validationMiddleware(req, res, next),
]