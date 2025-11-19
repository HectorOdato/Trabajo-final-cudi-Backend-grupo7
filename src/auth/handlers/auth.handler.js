import { encryptPassword } from "../../shared/utils/handle-password.util";
import { findUserByProp } from "../repository/user.repository";

const RegisterController = async (req, res) => {
    try {
        const user = req.body

        if (findUserByProp({ username: user.username })) {
            return res.status(400).json({ message: "este username ya existe" });
        }

        if (findUserByProp({ email: user.email })) {
            return res.status(400).json({ message: "este email ya existe" });
        }

        if (user.password.length < 6) {
            return res.status(400).json({ message: "la contraseña debe tener al menos 6 caracteres" });
        }

        const hashedPassword = await encryptPassword(user.password)
        user.password = hashedPassword;

        await registerUser(user);

        res.status(200).json({ message: "User registered successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

}

export default RegisterController;