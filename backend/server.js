import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import authRoutes from "./src/routes/authRoute.js";
import { connectDB } from "./src/lib/db.js";
import msg from "./src/routes/messageRoutes.js";

const app = express();
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));
app.use(cookieParser());
dotenv.config();
const PORT = process.env.PORT;
app.use("/api/auth", authRoutes);
app.use("/api/message", msg);
app.listen(PORT, () => {
  connectDB();
  console.log("port running on PORT:" + PORT);
});
