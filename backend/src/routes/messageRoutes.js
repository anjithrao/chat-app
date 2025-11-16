import express from "express";
import { protectedRoute } from "../middleware/auth.middleware.js";
import {
  getMessage,
  getUsersForSideBar,
  sendMsg,
} from "../controllers/msgController.js";
const msg = express.Router();

msg.get("/users", protectedRoute, getUsersForSideBar);
msg.get("/getmsg/:id", protectedRoute, getMessage);
msg.post("/send/:id", protectedRoute, sendMsg);

export default msg;
