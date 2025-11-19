import { generateAccessToken, generateRefreshToken } from "../../shared/utils/generate-token.util.js"
import { comparePassword } from "../../shared/utils/handle-password.util.js"

const loginHandler = async (req, res) => {
  try {
    const user = findUserByProp({ email: req.body.email })

    comparePassword(req.body.password, user.password)

    const payload = {
      name: user.name,
      role: user.role
    }

    const accessToken = generateAccessToken(payload)
    const refreshToken = generateRefreshToken(payload)

    res.status(200).json({
      message: "Login exitoso",
      accessToken,
      refreshToken
    })
  } catch (error) {
    handleHttpError(res, error)
  }
}

export default loginHandler