import express from "express"
import userRoutes from "./routes/userRoutes.js"
import dataBaseConnection from "./config/db.js";
import dotenv from "dotenv"
import products from "./data/products.js";
dotenv.config()
const app = express();
const port = 5000;
dataBaseConnection();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/users",userRoutes)
app.get("/api/products",(req,res)=>{ 
    res.json(products); 
})
app.get("/api/products/:id",(req,res)=>{
    const product = products.find((p) => p._id === req.params.id);
    res.json(product);
})
app.listen(port, ()=>{
    console.log(`App running on server ${port}`);
})