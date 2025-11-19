import UserModel from "../models/user.models.js"

export const findUserByProp = async (prop) => {
  // const user = await UserModel.findOne({ ...prop, status: true })
  const user = await UserModel.findOne({ prop })

  if (user == null) {
    throw new Error("User not found")
  }

  return user
}

export const registerUser = async (user) => {
  const newUser = await UserModel.create(user)
  return newUser
}

export const logoutUser = async (user) => { }