import dotenv from "dotenv";

dotenv.config();

const config = {
  PORT: process.env.PORT || 3000,
  MONGODB_URL:
    process.env.MONGODB_URL ||
    "mongodb+srv://zareelbwd:NIGnONGtJgfbrfS5@ecommerce.oeahohd.mongodb.net/smartBazar",
};

export default config;
