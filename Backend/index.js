import express from "express"
import userRoutes from "./routes/userRoutes.js"
import dataBaseConnection from "./config/db.js";
import dotenv from "dotenv"
dotenv.config()
const app = express();
const port = 5000;
dataBaseConnection();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/users",userRoutes)

app.listen(port, ()=>{
    console.log(`App running on server ${port}`);
})