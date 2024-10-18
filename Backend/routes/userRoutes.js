import express from "express";
const router = express.Router();
import { login , userRegister} from "../controllers/userController.js";

router.route("/login").post(login);
router.route("/userRegister").post(userRegister);

export default router;