import express from "express";
import {
  signup,
  login,
  test,
  forgotPassword,
} from "../controller/authController.js";
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

// protected user route auth => client => user => dashboard
router.get("/user-auth", isLoggedIn, (req, res) => {
  res.status(200).json({ ok: true });
});

//protected admin route auth => client => admin dashboard
router.get("/admin-auth", isLoggedIn, isAdmin, (req, res) => {
  res.status(200).json({ ok: true });
});

// forgot password || post
router.post("/forgot-password", forgotPassword);

export default router;
