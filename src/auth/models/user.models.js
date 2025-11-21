import mongoose from "mongoose"

const UserSchhema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    telephone: { type: Number },
    email: { type: String, unique: true },
    password: { type: String, select: true },
    role: { type: ['user', 'admin'], default: 'user' },
  },
  {
    timestamps: true, // TODO: createAt, updateAt
  }
)

const UserModel = mongoose.model('User', UserSchhema)

export default UserModel
