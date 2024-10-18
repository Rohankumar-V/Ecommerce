import mongoose from "mongoose"

async function dataBaseConnection() {
    try {
        await mongoose.connect(process.env.MONG_URI);
        console.log("Connected to MongoDB")
    } catch(err){
        console.error(err);
    }  
 }
 export default dataBaseConnection;