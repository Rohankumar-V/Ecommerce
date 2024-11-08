import asyncHandler from "../middleware/asyncHandler.js";
import User from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";
const userRegister = asyncHandler(async (req, res) => {
  const { name, email, password, phoneNo } = req.body;
  console.log(req.body);

  const emailExists = await User.findOne({
    email,
  });
  if (emailExists) {
    return res.status(400).json("User already exists");
  }
  const user = await User.create({
    name,
    email,
    password,
    phoneNo,
  });
  if(user){
    generateToken(res, user._id);
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      phoneNo: user.phoneNo,
      isAdmin: user.isAdmin,
    })
  } else {
    res.status(400)
    throw new Error('Invalid user data')
  }
});
const login = asyncHandler(async (req, res) => {
  console.log(req.body);
  const { email, password } = req.body;
  const user = await User.findOne({
    email,
  });
  console.log(user);
  if (user && (await user.matchPassword(password))) {
    generateToken(res, user._id);
    return res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      phoneNo: user.phoneNo,
      isAdmin: user.isAdmin,
    });
  }
  return res.status(401).json("Email/Password does not exists");
});

// @desc  logout user / clear cookie
// @route POST /api/users/logout
// @access Private
const logoutUser = asyncHandler(async (req, res) => {
  res.cookie('jwt', '', {
    httpOnly: true,
    expires: new Date(0)
  })
  res.status(200).json({
    message: 'Logged out successfully'
  });
});

// @desc  Get user profile
// @route GET /api/users/profile
// @access Private
const getUserProfile = asyncHandler(async (req, res) => {
  res.send("get user profile");
});

// @desc  Update user profile
// @route PUT /api/users/profile
// @access Private
const updateUserProfile = asyncHandler(async (req, res) => {
  res.send("update user");
});

// @desc  Get users
// @route GET /api/users
// @access Private/Admin
const getUsers = asyncHandler(async (req, res) => {
  res.send("get user");
});

// @desc  Get user by id
// @route GET /api/users/:id
// @access Private/Admin
const getUserById = asyncHandler(async (req, res) => {
  res.send("get user by id");
});

// @desc  Delete users
// @route DELETE /api/users/:id
// @access Private/Admin
const deleteUser = asyncHandler(async (req, res) => {
  res.send("Delete user");
});

// @desc  Update users
// @route PUT /api/users/:id
// @access Private/Admin
const updateUser = asyncHandler(async (req, res) => {
  res.send("update user");
});
export {
  userRegister,
  login,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  getUserById,
  deleteUser,
  updateUser,
};
