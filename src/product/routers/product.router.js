import express from "express"
import * as productController from "../handlers/product.handler.js"
import {upload} from "../../shared/utils/multer.js";

const productRouter = express.Router()

productRouter.post('/', upload.single('image'), productController.createProduct);

productRouter.get("/", productController.listProducts)

productRouter.get("/:id", productController.findById)

productRouter.put("/:id", productController.update)

productRouter.delete("/:id", productController.remove)

productRouter.put("/enable/:id", productController.enable)

export default productRouter
