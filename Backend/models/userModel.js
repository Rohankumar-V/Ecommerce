import mangoose from "mongoose";
const UserModelSchema = mangoose.Schema({
    name : {
        type : String,
        require:true
    },
    email : {
        type : String,
        require:true
    },
    password : {
        type : String,
        require:true
    },
    phoneNo : {
        type : Number,
        require:true
    }
})

const User = mangoose.model("User",UserModelSchema)
export default User;