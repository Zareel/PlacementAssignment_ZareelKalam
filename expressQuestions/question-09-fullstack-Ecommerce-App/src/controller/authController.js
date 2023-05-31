import { comparePassword, hashPassword } from "../helpers/authHelpers.js";
import User from "../models/userSchema.js";
import JWT from "jsonwebtoken";
import config from "../config/index.js";

export const signup = async (req, res) => {
  try {
    // get the data from the frontend
    const { name, email, password, phone, address, dateOfBirth } = req.body;
    //validation
    if (!name || !email || !password || !phone || !address || !dateOfBirth) {
      return res.send({ message: "All the fields are required" });
    }
    // check if the user is already existing
    const existingUser = await User.findOne({ email });
    // if user is existing send message
    if (existingUser) {
      return res.status(200).json({
        success: false,
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
      dateOfBirth,
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
        _id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        address: user.address,
        dateOfBirth: user.dateOfBirth,
        role: user.role,
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

export const test = async (req, res) => {
  res.send("Protected route");
};

export const forgotPassword = async (req, res) => {
  try {
    const { email, dateOfBirth, newPassword } = req.body;
    if (!email || dateOfBirth || !newPassword) {
      res.status(400).json({ message: "All the fields are required" });
    }
    //check
    const user = await User.findOne({ email, dateOfBirth });
    //validation
    if (!user) {
      res.status(401).json({
        success: false,
        message: "Wrong email or DOB",
      });
    }
    // if user exists hash password
    const hashed = await hashPassword(newPassword);
    await User.findByIdAndUpdate(user._id, { password: hashed });
    res.status(200).json({
      success: true,
      message: "Password reset successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      error,
    });
  }
};
