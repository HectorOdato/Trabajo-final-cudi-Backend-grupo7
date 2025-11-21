import { Router } from "express"
import loginHandler from "../handlers/login-user.handlers.js"
import registerHandler from "../handlers/register-user.handlers.js"
import { loginUserValidation, registerUserValidation } from "../validations/auth.validation.js"

const authRouter = Router()

authRouter.post("/register", registerUserValidation, registerHandler)
authRouter.post("/login", loginUserValidation, loginHandler)

export default authRouter