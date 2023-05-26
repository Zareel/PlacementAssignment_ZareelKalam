import express from "express";
import { signup } from "../controller/authController.js";

//router object
const router = express.Router();

//routing
// signup || method post

router.post("/signup", signup);

export default router;
