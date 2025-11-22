import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    lastname: { type: String, required: true },       // corregido
    phone: { type: Number, required: true },          // corregido
    email: { type: String, unique: true, required: true },
    password: { type: String, select: false },        // proteger password
    role: { 
      type: String, 
      enum: ["user", "admin"], 
      default: "user" 
    }
  },
  {
    timestamps: true,
  }
);

const UserModel = mongoose.model("User", UserSchema);

export default UserModel;


