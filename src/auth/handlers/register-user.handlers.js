import ErrorHandler from "../../shared/errors/handle-error.js"
import handleHttpError from "../../shared/errors/handle-http-error.js"
import { encryptPassword } from "../../shared/utils/handle-password.util.js"
import { findUserByProp, registerUser } from "../repository/user.repository.js"

const registerHandler = async (req, res) => {
  try {

    const user = req.body

    if (findUserByProp({ email: req.body.email })) {
      throw new ErrorHandler("USER_ALREADY_EXISTS", 400)
    }

    if (findUserByProp({ username: req.body.username })) {
      throw new ErrorHandler("USER_ALREADY_EXISTS", 400)
    }

    const hashedPassword = await encryptPassword(req.body.password)

    user.password = hashedPassword

    await registerUser(user)

    res.status(201).json({
      message: "Usuario creado con exito",
      data: {
        id: user.id,
      }
    })
  } catch (error) {
    handleHttpError(res, error)
  }
}

export default registerHandler