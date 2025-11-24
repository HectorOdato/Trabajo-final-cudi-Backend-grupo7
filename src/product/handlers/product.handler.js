import { validateIfIsEmpty } from "../../shared/utils/validate-attribute.js";
import validateID from "../../shared/utils/validate-id.util.js";
import * as productRepository from "../repositories/product.repository.js";
import { getCategoryByProp } from "../../category/repsitories/category.repository.js"
import { subirImagenCloudinary } from "../../shared/utils/cloudinary.js";
import Product from "../models/product.model.js";

export const createProduct = async (req, res) => {
  try {
    console.log("PRODUCTO CREADO:", req.body);
    console.log(req.file)
    const { name, description, price, category, stock, status } = req.body;
    let image = null

    if (req.file){
      const cloudinaryResult = await subirImagenCloudinary(req.file.buffer, req.file.mimetype);
      image = cloudinaryResult.secure_url;
    }

    validateIfIsEmpty(name);
    validateIfIsEmpty(description);
    validateIfIsEmpty(price);
    validateIfIsEmpty(category);
    validateIfIsEmpty(stock);
    validateIfIsEmpty(status);

    const ProductoCreado = await productRepository.crear(
      name,
      description,
      price,
      category,
      stock,
      image,
      status
    ); 
    console.log("Producto creado con éxito:", ProductoCreado);
    res.status(201).json({ 
      message: "Producto creado", 
      product: ProductoCreado });
  } catch (error) {
    console.error("Error al crear producto:", error);
    res.status(500).json({ mensaje: "error en el servidor", error: error.message });
  }
};

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
    console.log("UPDATES:", req.body);

    const id = validateID(req);

    const { name, price, stock, description, category, status } = req.body;

    const productoActualizado = await productRepository.actualizar(
      id,
      { name, price, stock, description, category, status }
    );

    res.status(200).json({
      message: "Producto actualizado",
      data: productoActualizado,
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({
      mensaje: "error en el servidor",
      error: error,
    });
  }
}


export async function disable(req, res) {
  try {
    const id = validateID(req)

    const productoDeshabilitado = await productRepository.deshabilitar(id);

    res.status(200).json(productoDeshabilitado);
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

    const productoHabilitado = await productRepository.habilitar(id, {
      status: true,
    });

    res.status(200).json(productoHabilitado);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      mensaje: "error en el servidor",
      error: error,
    });
  }
}

export async function remove(req, res) {
  try{
    const id = validateID(req)

    const productoEliminado = await productRepository.eliminar(id)
    res.status(200).json(productoEliminado)
}
catch (error) {
    console.log(error);
    res.status(500).json({
      mensaje: "error en el servidor",
      error: error,
    });
  }
}
  


export const getProductsByCategory = async (req, res) => {
  try {
    const { categoryId } = req.params

    const category = await getCategoryByProp({ _id: categoryId })

    const products = await Product.find({ category: category._id, status: true }).populate("category")

    res.status(200).json({
      mensaje: `Productos de la categoría ${category.name}`,
      products,
    })
  } catch (error) {
    res.status(400).json({ mensaje: "Error obteniendo productos por categoría", error: error.message })
  }
}