import User from "../models/userSchema.js";
import { comparePassword, hashPassword } from "../helpers/authHelpers.js";
import config from "../config/index.js";
import JWT from "jsonwebtoken";

export const cookieOptions = {
  expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
  httpOnly: true,
};

/******************************************************
 * @SIGNUP
 * @route http://localhost:5000/api/auth/signup
 * @description User signUp Controller for creating new user
 * @returns User Object
 ******************************************************/
export const signup = async (req, res) => {
  try {
    // get user information
    const { name, lastName, email, password, address } = req.body;
    //validation
    if (!name || !lastName || !email || !password || !address) {
      return res.send({ error: "All the fields are required" });
    }
    //check if the user is existing
    const existingUser = await User.findOne({ email });
    // if the user is existing send a token
    if (existingUser) {
      return res.status(200).json({
        success: true,
        message: "Already singed us please login",
      });
    }
    // if the user is not existing hash password
    const hashedPassword = await hashPassword(password);
    //save
    const user = await new User({
      name,
      lastName,
      email,
      address,
      password: hashedPassword,
    }).save();
    res.status(201).json({
      success: true,
      message: "User signed up successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Error in signing up",
      error,
    });
  }
};
/*********************************************************
 * @LOGIN
 * @route http://localhost:5000/api/auth/login
 * @description User Login Controller for signing in the user
 * @returns User Object
 *********************************************************/
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

/**********************************************************
 * @LOGOUT
 * @route http://localhost:5000/api/auth/logout
 * @description User Logout Controller for logging out the user
 * @description Removes token from cookies
 * @returns Success Message with "Logged Out"
 **********************************************************/

export const signout = (req, res) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });

  res.status(200).json({
    message: "user has logged out",
  });
};

/**********************************************************
 * @GET_PROFILE
 * @route http://localhost:5000/api/auth/profile
 * @description check token in cookies, if present then returns user details
 * @returns Logged In User Details
 **********************************************************/

export const getProfile = async (req, res) => {
  const { user } = req.params;
  try {
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
    res.status(200).json({
      success: true,
      user,
    });
  } catch {
    res.status(404).json({
      success: false,
      message: "Profile not found",
    });
  }
};
