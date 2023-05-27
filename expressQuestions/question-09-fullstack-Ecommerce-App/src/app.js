import express from "express";
import morgan from "morgan";
import authRoutes from "./routes/authRoute.js";
import cors from "cors";

//rest object
const app = express();

//middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//routes
app.use("/api/v1/auth", authRoutes);

// starting a server
app.get("/", (req, res) => {
  res.send(`<h1>Welcome to homepage</h1>`);
});

export default app;
