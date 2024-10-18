import User from "../models/userModel.js";

const userRegister = async (req,res) => {
    const {name,email,password,phoneNo} = req.body;   
    console.log(req.body)
    
    const emailExists = await User.findOne({
        email
    })
    if(emailExists){
        return res.status(409).json("User already exists");
    } 
    const user = await User.create({
        name,email,password,phoneNo
    })
    return res.status(200).json(user);
}
const login = async (req,res) => {
    console.log(req.body);
    const {email,password} = req.body;
    const user = await User.findOne({
        email
    })
    console.log(user);
    if(user && (user.password === password)){
        return res.status(200).json({
            _id: user._id,
            name : user.name,
            email : user.email,
            phoneNo : user.phoneNo
        })
    } 
    return res.status(401).json("Email/Password does not exists")
}
export {userRegister, login };