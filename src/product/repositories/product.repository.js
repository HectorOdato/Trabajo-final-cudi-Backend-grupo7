import Product from "../models/product.model.js";

export async function crear(name, description,price, category, stock, image, status) {
  const productoNuevo = await Product.create({
      name,
      description,
      price,
      category,
      stock,
      image,
      status
  })

  return productoNuevo
}

export async function actualizar(id, data) {
  const productoActualizado = await Product.findByIdAndUpdate(
    id,
    data,
    { new: true,
      runValidators: false
    })
  return productoActualizado
}

export async function obtenerUno(idProducto) {
  const producto = await Product.findOne({ _id: idProducto, status: true })
  return producto
}

export async function obtenerTodos() {
  const productos = await Product.find()
  return productos
}

export async function deshabilitar(id) {
  const productoDeshabilitado = await Product.findByIdAndUpdate(id, { status: false },{ new: true }) 
  return productoDeshabilitado
}

export async function habilitar(id,data) {
  const productoHabilitado = await Product.findByIdAndUpdate(id,data, { new: true })
  return productoHabilitado
}

export async function eliminar(id) {
  const productoEliminado = await Product.findByIdAndDelete(id)
  return productoEliminado
}
