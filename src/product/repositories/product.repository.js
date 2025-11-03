import Product from "../models/product.model.js";

export async function crear(name, price, stock, status) {
  const productoNuevo = await Product.create({
    name,
    price,
    stock,
    status
  })

  return productoNuevo
}

export async function actualizar(id, name, price, stock, status) {
  const productoActualizado = await Product.findByIdAndUpdate(id, {
    name,
    price,
    stock,
    status
  })
  return productoActualizado
}

export async function obtenerUno(idProducto) {
  const producto = await Product.findOne({ _id: idProducto, status: true })
  return producto
}

export async function obtenerTodos() {
  const productos = await Product.find({ status: true })
  return productos
}

export async function eliminar(id) {
  //Product.findOneAndDelete() -> borrado fisico -> eliminar de db
  const productoEliminado = await Product.findByIdAndUpdate(id, { status: false }) //borrado logico -> cambiar estado
  return productoEliminado
}

export async function habilitar(id) {
  const productoHabilitado = await Product.findByIdAndUpdate(id, { status: true })
  return productoHabilitado
}
