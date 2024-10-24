import express from "express"
import userRoutes from "./routes/userRoutes.js"
import dataBaseConnection from "./config/db.js";
import dotenv from "dotenv"
import { notFound,errorHandler } from "./middleware/errorMiddleWare.js";
import productRoutes from "./routes/productRoutes.js";
dotenv.config()
const app = express();
const port = 8000;
dataBaseConnection();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/users",userRoutes);
app.use("/api/products",productRoutes);

app.use(notFound);
app.use(errorHandler);
app.listen(port, ()=>{
    console.log(`App running on server ${port}`);
})