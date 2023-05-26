import express from "express";
import { signup, login, test } from "../controller/authController.js";
import { isAdmin, isLoggedIn } from "../middleware/authMiddleware.js";

//router object
const router = express.Router();

//routing
// signup || method post
router.post("/signup", signup);

// login || method post
router.post("/login", login);

//test route || method get
router.get("/testroute", isLoggedIn, isAdmin, test);

export default router;
