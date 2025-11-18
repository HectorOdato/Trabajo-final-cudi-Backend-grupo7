import dotenv from "dotenv";
dotenv.config();
import express from "express";
import mongoose from "mongoose";
import { v2 as cloudinary } from "cloudinary";
import categoryRouter from "./category/routes/category.route.js";
import productRouter from "./product/routers/product.router.js";
import cors from "cors";
/*import path from "path";*/

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const app = express();

const PORT = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/products", productRouter)
app.use("/api/categories", categoryRouter)
/*app.use('product/uploads/images', express.static(path.join(process.cwd(), 'product/uploads/images')));*/

app.use((_, res) => {
  res.status(404).json("404");
});


mongoose.connect(process.env.URLDB).then(() => {
  console.log("base de datos conectada:", process.env.URLDB);
  app.listen(PORT, () => {
    console.log("servidor escuchando en puerto:", PORT);
  });
}).catch((error) => {
  console.log("error:", error)
});