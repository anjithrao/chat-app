import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

export const protectedRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    if (!token)
      return res.status(400).json({ message: "Unauthorized-no token" });
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded) {
      return res.status(400).json({ message: "Invalid Token" });
    }
    const user = await User.findById(decoded.userId).select("-password");
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }
    req.user = user;
    //goes to next fn
    next();
  } catch (error) {
    console.log("Error in Middle ware", error.message);
    res
      .status(500)
      .json({ message: "Internal Server Error", errors: error.message });
  }
};
