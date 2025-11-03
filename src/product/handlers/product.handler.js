import { validateIfIsEmpty } from "../../shared/utils/validate-attribute.js";
import validateID from "../../shared/utils/validate-id.util.js";
import * as productRepository from "../repositories/product.repository.js";

export async function saveProduct(req, res) {
  try {
    const { name, price, status, stock } = req.body;

    validateIfIsEmpty(name)
    validateIfIsEmpty(price)
    validateIfIsEmpty(status)
    validateIfIsEmpty(stock)

    const productoCreado = await productRepository.crear(
      name,
      price,
      stock,
      status
    );

    res.status(201).json({
      mensaje: "producto creado",
      data: productoCreado
    });
  } catch (error) {
    res.status(500).json({
      mensaje: "error en el servidor",
      error: error,
    });
  }
}

export async function listProducts(req, res) {
  try {
    const productos = await productRepository.obtenerTodos();

    if (productos) {
      res.status(200).json({
        mensaje: "productos encontrados",
        codigo: 200,
        datos: productos,
      });
    } else {
      res.status(200).json({
        mensaje: "productos no encontrados",
        codigo: 200,
        datos: [],
      });
    }
  } catch (error) {
    res.status(500).json({
      mensaje: "error en el servidor",
      error: error,
    });
  }
}

export async function findById(req, res) {
  try {
    const id = validateID(req)

    const producto = await productRepository.obtenerUno(id);

    if (producto) {
      res.status(200).json({
        mensaje: "producto encontrado",
        codigo: 200,
        datos: producto,
      });
    } else {
      res.status(200).json({
        mensaje: "producto no encontrado",
        codigo: 200,
        datos: [],
      });
    }
  } catch (error) {
    res.status(500).json({
      mensaje: "error en el servidor",
      error: error,
    });
  }
}

export async function update(req, res) {
  try {
    const id = validateID(req)

    const { name, price, status, stock } = req.body;

    validateIfIsEmpty(name)
    validateIfIsEmpty(price)
    validateIfIsEmpty(status)
    validateIfIsEmpty(stock)

    const productoActualizado = await productRepository.actualizar(
      id,
      name,
      price,
      stock,
      status
    );

    res.status(201).json(productoActualizado);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      mensaje: "error en el servidor",
      error: error,
    });
  }
}

export async function remove(req, res) {
  try {
    const id = validateID(req)

    const productoEliminado = await productRepository.eliminar(id);

    res.status(200).json(productoEliminado);
  } catch (error) {
    res.status(500).json({
      mensaje: "error en el servidor",
      error: error,
    });
  }
}

export async function enable(req, res) {
  try {
    const id = validateID(req)

    const productoHabilitado = await productRepository.habilitar(id);

    res.status(200).json(productoHabilitado);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      mensaje: "error en el servidor",
      error: error,
    });
  }
}
