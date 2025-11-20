import { Router } from "express";
import { remove, findById, list, save, update,} from "../handlers/category.handler.js";
import { categoryBodyValidation,categoryParamValidation } from "../validations/category.validation.js";

const categoryRouter = Router()

categoryRouter.post("/", categoryBodyValidation, save)

categoryRouter.put("/:id",categoryBodyValidation, update)

categoryRouter.get("/:id", categoryParamValidation, findById)

categoryRouter.delete("/:id",categoryParamValidation, remove)

categoryRouter.get("/", list)

export default categoryRouter
