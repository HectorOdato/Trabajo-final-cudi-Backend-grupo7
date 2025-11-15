import { Router } from "express";
import { remove, findById, list, save, update,} from "../handlers/category.handler.js";

const categoryRouter = Router()

categoryRouter.get("/", list)

categoryRouter.get("/:id", findById)

categoryRouter.post("/", save)

categoryRouter.put("/:id", update)

categoryRouter.delete("/:id", remove)

export default categoryRouter
