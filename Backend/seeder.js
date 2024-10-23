import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";
import users from "./data/user.js";
import products from "./data/products.js";
import User from "./models/userModel.js";
import Product from "./models/productsModel.js";
import Order from "./models/orderModel.js";
import dataBaseConnection from "./config/db.js";

dotenv.config();
dataBaseConnection();

const importData = async () => {
    try {
        await Order.deleteMany();
        await Product.deleteMany();
        await User.deleteMany();

        const createdUers = await User.insertMany(users);
        
        const admimUser = createdUers[0]._id;
        
        const sampleProducts = products.map((product) => {
            return { ...product, user: admimUser}
        });
        await Product.insertMany(sampleProducts);
        console.log("Data Imported!".green.inverse);
        process.exit();
    } catch (error) {
        console.log(`${error}`.red.inverse);
        process.exit();
    }
}

const destroyData = async () => {
    try {
        await Order.deleteMany();
        await Product.deleteMany();
        await User.deleteMany();

        console.log('Data Destroyed!'.red.inverse);
        process.exit();
    } catch (error) {
        console.log(`${error}`.red.inverse);
        process.exit();
    }
};

if(process.argv[2] === '-d'){
    destroyData();
} else {
    importData();
}