import { param } from "express-validator";

export const productParamIDValidation = [
  param("id").isNumeric(),
  (req, res, next) => validationMiddleware(req, res, next),
]