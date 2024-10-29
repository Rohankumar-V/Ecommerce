import express from "express";
const router = express.Router();
import {
  login,
  userRegister,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  getUserById,
  deleteUser,
  updateUser,
} from "../controllers/userController.js";
router.route("/login").post(login);
router.route("/userRegister").post(userRegister).get(getUsers);
router.post('/logout',logoutUser);
router.get('/profile',getUserProfile);
router.put('/profile',updateUserProfile);
router.get('/',getUsers);
router.get('/:id',getUserById);
router.delete('/:id',deleteUser);
router.put('/:id',updateUser);

export default router;
