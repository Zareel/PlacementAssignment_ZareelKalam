import express from "express";

import {
  signup,
  login,
  signout,
  getProfile,
} from "../controllers/authController.js";
import { isLoggedIn } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/signup", signup);

router.post("/login", login);

router.get("/signout", signout);

router.get("/profile", isLoggedIn, getProfile);

router.get("/testroute", isLoggedIn, (req, res) => {
  res.send("A protected route");
});

export default router;
