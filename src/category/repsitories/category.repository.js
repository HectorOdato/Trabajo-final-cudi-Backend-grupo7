import CategoryModel from "../models/category.model.js"

export const getAllCategories = async (offset, limit) => {
  const categories = await CategoryModel.find({ status: true })

  if (categories.length === 0) {
    return []
  }

  return categories
}

export const getCategoryByProp = async (prop) => {
  const category = await CategoryModel.findOne({ ...prop, status: true })

  if (category == null) {
    throw new Error("Category not found")
  }

  return category
}

export const createCategory = async (category) => {
  const newCategory = await CategoryModel.create(category)
  if (newCategory == null) {

    throw new Error("Repository error: Cannot create category")
  }

  return newCategory
}

export const updateCategory = async (id, category) => {
  const categoryUpdated = await CategoryModel.findOneAndUpdate(
    { _id: id },
    { ...category },
    { new: true }
  )

  if (categoryUpdated == null) {
    throw new Error("Repository error: Cannot update category")
  }

  return categoryUpdated
}

export const removeCateogory = async (id) => {
  await CategoryModel.findOneAndDelete({ _id: id })
}
