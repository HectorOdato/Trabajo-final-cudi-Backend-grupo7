import { UserModel } from "../models/user.model.js";

export const findUserByProp = async (prop) => {
    const user = await UserModel.findOne({prop});

    if (user == null) {
        throw new Error("User not found");
    }
    return user;
}

export const registerUser = async (user) => {
    const newUser = new UserModel.create(user);
    return newUser;
}

export const loginUser = async (user) => {
    const foundUser = await UserModel.findOne({ email: user.email, password: user.password });

    if (foundUser == null) {
        throw new Error("Invalid email or password");
    }
}

