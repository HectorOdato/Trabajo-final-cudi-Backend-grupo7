import { model, Schema } from "mongoose";

const categorySchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  image:{ type: String},
  status: { type: Boolean, default: true },
})

const CategoryModel = model('Category', categorySchema)

export default CategoryModel
