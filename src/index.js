import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import categoryRouter from "./category/routes/category.route.js";
import productRouter from "./product/routers/product.router.js";
import cors from "cors";


dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/products", productRouter)
app.use("/api/categories", categoryRouter)
app.use('/uploads', express.static('uploads'));


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