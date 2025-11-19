import { Router } from "express"
import loginHandler from "../handlers/login-user.handler.js"
import registerHandler from "../handlers/register-user.handler.js"
import { loginUserValidation, registerUserValidation } from "../validations/auth.validation.js"

const authRouter = Router()

authRouter.post("/register", registerUserValidation, registerHandler)
authRouter.post("/login", loginUserValidation, loginHandler)

export default authRouter