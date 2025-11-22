import { body, param } from "express-validator"
import validationMiddleware from "../../shared/middleweres/middlewere.js"

export const productBodyValidation = [
    body('name')
    .trim()
    .notEmpty()
    .withMessage('El nombre es requerido')
    .isLength({ max: 200 })
    .withMessage('El nombre no puede exceder 200 caracteres'),

    body('price')
    .isFloat({ min: 0 })
    .withMessage('El precio debe ser un número positivo'),

    body('description')
    .trim()
    .notEmpty()
    .withMessage('La descripción es requerida'),

    body('category')
    .trim()
    .notEmpty()
    .withMessage('La categoría es requerida'),

    body("stock")
    .isNumeric()
    .withMessage("El stock debe ser un número"),

    body('active')
    .optional()
    .isBoolean()
    .withMessage('Active debe ser un valor booleano'),

    (req, res, next) => validationMiddleware(req, res, next),
]

export const productParamValidation = [
    param("id").isMongoId(),
    (req, res, next) => validationMiddleware(req, res, next),
]

export function validarImagen(req,res,next) {
    if(!req.file){
        return res.status(400).json({messege: 'La imagene es requerida'})
    }
    const tiposValidos = ['image/jpeg', 'image/png', 'image/jpg', 'image/webp'];

    if (!tiposValidos.includes(req.file.mimetype)) {
    return res.status(400).json({ message: 'El archivo debe ser una imagen válida' });
    }
    next();
}