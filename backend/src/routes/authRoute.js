import express from "express";
import {
  signup,
  login,
  logout,
  updateProfile,
  checkAuth,
  getUsers,
  deleteUser,
} from "../controllers/authController.js";
import { protectedRoute } from "../middleware/auth.middleware.js";
const auth = express.Router();

auth.post("/signup", signup);
auth.post("/login", login);
auth.post("/logout", logout);
auth.put("/updateProfile", protectedRoute, updateProfile);
auth.get("/check", protectedRoute, checkAuth);
auth.get("/get-users", getUsers);
// auth.delete("/delete-e/:email", deleteUser);
export default auth;
