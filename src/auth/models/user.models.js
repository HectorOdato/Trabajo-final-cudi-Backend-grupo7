const Userschema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    age: { type: Number, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    role: { type: String, enum: ['user', 'admin'], default: 'user' },
},
{ 
    timestamps: true 
}
);