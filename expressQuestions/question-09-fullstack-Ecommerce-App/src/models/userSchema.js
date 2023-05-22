import mongoose from "mongoose";
import AuthRoles from "../utils/authRoles";

const userSchema = new mongoose.Schema = ({
    name:{
        type: String,
        required: [true, "Name is required"],
        trim: true,
        maxLength:[32, "Name should not exceed 32 chars"]
    },
    lastName:{
        type: String,
        required:[true, "Last name is required"],
        trim: true,
        maxLength:[32, "lastName shoule not exceed 32 chars"]
    },
    email:{
        type: String,
        required:[true, "Email is required"]
    },
    password:{
        type: String,
        required: [true, "Password is required"],
        minLength:[8, "Password should contain atleast 8 chars"]

    },
    role:{
        type: String,
        enum: Object.values(AuthRoles),
        default: AuthRoles.USER
    }

},{timestamps: true}) 

export default mongoose.model("User", userSchema)