import { validateIfIsEmpty } from "../../shared/utils/validate-attribute.js"
import validateID from "../../shared/utils/validate-id.util.js"
import { createCategory, enableCategory, getAllCategories, getCategoryByProp, removeCateogory, updateCategory } from "../repsitories/category.repository.js"

export const list = async (_, res) => {
  try {
    const categories = await getAllCategories()

    if (categories.length === 0) {
      res.status(200).json({ message: "categorias no encontradas", data: categories })
    }

    res.status(200).json({ message: "categorias encontradas", data: categories })
  } catch (error) {
    console.error(error)
  }
}

export const findById = async (req, res) => {
  try {
    const id = validateID(req)

    const category = await getCategoryByProp({ id })

    res.status(200).json({
      message: "categoria encontrada",
      data: category
    })
  } catch (error) {
    console.error(error)
  }
}

export const save = async (req, res) => {
  try {
    const { name, description, image } = req.body

    validateIfIsEmpty(name)
    validateIfIsEmpty(description)

    const category = await createCategory({ name, description, image })

    res.status(200).json({
      message: "categoria creada",
      data: category
    })
  } catch (error) {
    console.error(error)
  }
}

export const update = async (req, res) => {
  try {
    const id = validateID(req)

    const { name, description, image } = req.body

    validateIfIsEmpty(name)
    validateIfIsEmpty(description)
    validateIfIsEmpty(image)

    const category = await updateCategory(id, { name, description, image })

    res.status(200).json({
      message: "categoria actualizada",
      data: category
    })
  } catch (error) {
    console.error(error)
  }
}

export const remove = async (req, res) => {
  try {
    const id = validateID(req)

    const category = await removeCateogory(id)

    res.status(200).json({
      message: "categoria eliminada",
      data: category
    })
  } catch (error) {
    console.error(error)
  }
}

export const enable = async (req, res) => {
  try {
    const id = validateID(req)

    await enableCategory(id)

    res.status(200).json({
      mssage: "categoria habilitada",
    })
  } catch (error) {
    console.error(error)
  }
}
