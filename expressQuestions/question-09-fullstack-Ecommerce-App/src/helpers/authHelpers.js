import bcrypt, { compare } from "bcryptjs";

export const hashPassword = async (passward) => {
  try {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(passward, saltRounds);
    return hashedPassword;
  } catch (error) {
    console.log(error);
  }
};

export const comparePassword = async (passward, hashedPassword) => {
  return bcrypt.compare(passward, hashedPassword);
};
