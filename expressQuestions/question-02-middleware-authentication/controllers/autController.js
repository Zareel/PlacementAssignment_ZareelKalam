import User from "../models/userSchema.js";
import { comparePassword } from "../utils/authHelpers.js";
import config from "../config/index.js";
import JWT from "jsonwebtoken";

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    //validation
    if (!email || !password) {
      return res.status(404).json({
        success: false,
        message: "Invalid username or password",
        error,
      });
    }
    //check if the user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "Please login",
      });
    }
    // if the user exists compare password
    const match = await comparePassword(password, user.password);
    if (!match) {
      return res.status(200).json({
        success: false,
        message: "Invalid password",
      });
    } else {
      const token = await JWT.sign({ _id: user._id }, config.JWT_SECRET, {
        expiresIn: config.JWT_EXPIRTY,
      });
      res.cookie("token", token, cookieOptions);
      res.status(200).json({
        success: true,
        message: "Logged in successfully",
        user: {
          name: user.name,
          lastName: user.lastName,
          email: user.email,
          address: user.address,
        },
        token,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      //internal server error
      success: false,
      message: "Error in signing in",
    });
  }
};
