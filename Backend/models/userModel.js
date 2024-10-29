import mangoose from "mongoose";

const UserModelSchema = mangoose.Schema({
    name : {
        type : String,
        required:true
    },
    email : {
        type : String,
        required:true,
        unique: true,
    },
    password : {
        type : String,
        required:true
    },
    phoneNo : {
        type : Number,
        required:true
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false,
    }
}, {
    timestamps: true,
})

const User = mangoose.model("User",UserModelSchema)
export default User;