import express from "express";
import { postData } from "../controllers/authController.js";
import { isLoggedIn } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/postData", isLoggedIn, postData);
