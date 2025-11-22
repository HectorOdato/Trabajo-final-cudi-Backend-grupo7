import mongoose from "mongoose"

const UserSchhema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    lastname: { type: String, required: true },
    telephone: { type: Number, required: true },
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
