import express from "express" 
import { productBodyValidation, productParamValidation, validarImagen } from "../validations/product.validation.js" 
import * as productController from "../handlers/product.handler.js" 
import {upload} from "../../shared/utils/multer.js"; 

const productRouter = express.Router() 
productRouter.post('/', upload.single('image'), validarImagen, productBodyValidation, productController.createProduct); 
productRouter.get("/:id", productParamValidation, productController.findById) 
productRouter.put("/:id", productBodyValidation, productController.update) 
productRouter.delete("/:id", productParamValidation , productController.disable) 
productRouter.delete("/remove/:id", productParamValidation , productController.remove) 
productRouter.put("/enable/:id",productParamValidation, productController.enable) 
productRouter.get("/category/:categoryId",productController.getProductsByCategory); productRouter.get("/", productController.listProducts)


export default productRouter