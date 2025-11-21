import dotenv from "dotenv";
dotenv.config();
import express from "express";
import { v2 as cloudinary } from "cloudinary";
import categoryRouter from "./category/routes/category.route.js";
import productRouter from "./product/routers/product.router.js";
import connectMongoDB from "./shared/config/mongodb.config.js";
import logger from "./shared/config/logger.config.js";
import cors from "cors";
import authRouter from "./auth/routes/auth.router.js";
/*import path from "path";*/

/*CONEXION A CLOUDINARY*/
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const app = express();

/* MIDDLEWARES */
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/products", productRouter)
app.use("/api/categories", categoryRouter)
app.use('/api/auth', authRouter);
/*app.use('product/uploads/images', express.static(path.join(process.cwd(), 'product/uploads/images')));*/

app.use((_, res) => {
  res.status(404).json("404");
});

/* SISTEMA  DE LOGS */
app.use((req, _, next) => {
  logger.info(`${req.method} ${req.url}`);
  next();
});

/* VARIABLES DE ENTORNO */
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || "localhost";

/* CONEXION A MONGODB SERVER */
connectMongoDB()
app.listen(PORT, () => console.log(`Servidor iniciado http://${HOST}:${PORT}`));