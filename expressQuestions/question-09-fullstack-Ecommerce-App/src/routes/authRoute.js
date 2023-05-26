import express from "express";
import { signup, login } from "../controller/authController.js";

//router object
const router = express.Router();

//routing
// signup || method post
router.post("/signup", signup);

// login || method post
router.post("/login", login);

export default router;
