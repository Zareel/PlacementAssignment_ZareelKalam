import JWT from "jsonwebtoken";
import config from "../config/index.js";
import User from "../models/userSchema.js";
import AuthRoles from "../utils/authRoles.js";

//Protected Routes token base
export const isLoggedIn = async (req, res, next) => {
  try {
    const decode = JWT.verify(req.headers.authorization, config.JWT_SECRET);
    req.user = decode;
    next();
  } catch (error) {
    console.log(error);
  }
};

//admin acceess

//admin acceess
export const isAdmin = async (req, res, next) => {
  try {
    const user = await User.findById(req.user._id);
    if (user.role !== 1) {
      return res.status(401).json({
        success: false,
        message: "UnAuthorized Access",
      });
    } else {
      next();
    }
  } catch (error) {
    console.log(error);
    res.status(401).json({
      success: false,
      error,
      message: "Error in admin middelware",
    });
  }
};
