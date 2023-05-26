import { hashPassword } from "../helpers/authHelpers.js";
import User from "../models/userSchema.js";

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
