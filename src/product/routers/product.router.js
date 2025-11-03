import express from "express"
import * as productController from "../handlers/product.handler.js"

const productRouter = express.Router()

productRouter.post("/", productController.saveProduct)

productRouter.get("/", productController.listProducts)

productRouter.get("/:id", productController.findById)

productRouter.put("/:id", productController.update)

productRouter.delete("/:id", productController.remove)

productRouter.put("/enable/:id", productController.enable)

export default productRouter
