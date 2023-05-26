import { comparePassword, hashPassword } from "../helpers/authHelpers.js";
import User from "../models/userSchema.js";
import JWT from "jsonwebtoken";
import config from "../config/index.js";

export const signup = async (req, res) => {
  try {
    // get the data from the frontend
    const { name, email, password, phone, address } = req.body;
    //validation
    if (!name || !email || !password || !phone || !address) {
      return res.send({ error: "All the fields are required" });
    }
    // check if the user is already existing
    const existingUser = await User.findOne({ email });
    // if user is existing send message
    if (existingUser) {
      return res.status(200).json({
        success: true,
        message: "Already signed up, please login",
      });
    }
    // let the new user sign up
    const hashedPassword = await hashPassword(password);
    // save
    const user = await new User({
      name,
      email,
      phone,
      address,
      password: hashedPassword,
    }).save();
    res.status(201).json({
      success: true,
      message: "User successfully signed up",
      user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error in signing up",
      error,
    });
  }
};

export const login = async (req, res) => {
  try {
    // get email and password
    const { email, password } = req.body;
    //validation
    if (!email || !password) {
      return res.status(404).json({
        success: false,
        message: "Invalid email or password",
      });
    }
    //check user
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not signed up",
      });
    }
    // compare password
    const match = await comparePassword(password, user.password);
    if (!match) {
      return res.status(200).json({
        success: false,
        message: "Invalid password",
      });
    }

    // create JWT token
    const token = JWT.sign({ _id: user._id }, config.JWT_SECRET, {
      expiresIn: "7d",
    });
    res.status(200).json({
      success: true,
      message: "Logged in Successfully",
      user: {
        name: user.name,
        email: user.email,
        phone: user.phone,
        address: user.address,
      },
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "error in login",
      error,
    });
  }
};
