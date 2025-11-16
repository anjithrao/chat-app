import e from "express";
import mongoose from "mongoose";
import User from "../models/userModel.js";
import Message from "../models/messageModel.js";
import cloudinary from "../lib/cloudinary.js";
export const getUsersForSideBar = async (req, res) => {
  try {
    const loggedwala = req.user._id;
    const filteredwala = await User.find({ _id: { $ne: loggedwala } }).select(
      "-password"
    );
    res.status(200).json(filteredwala);
  } catch (error) {
    console.log("error in getUsersForSideBar ", error.message);
    res.status(500).json({ message: "Internal Serror Error" });
  }
};
export const getMessage = async (req, res) => {
  try {
    const { id: recieverId } = req.params;
    const myid = req.user._id;
    const messages = await Message.find({
      $or: [
        { senderId: myid, recieverId: recieverId },
        { senderId: recieverId, recieverId: myid },
      ],
    }).sort({ createdAt: 1 });
    res.status(200).json(
      messages.map((m) => {
        return {
          image: m.image,
          text: m.text,
          createdAt: m.createdAt.toLocaleString(),
        };
      })
    );
  } catch (error) {
    console.log("Error in getMessage controller", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const sendMsg = async (req, res) => {
  try {
    const { text, image } = req.body;
    const { id: recieverId } = req.params;
    const senderId = req.user._id;
    let imageUrl;
    if (image) {
      const uploadRes = await cloudinary.uploader.upload(image);
      imageUrl = uploadRes.secure_url;
    }
    const msg = new Message({
      senderId,
      recieverId,
      text,
      image: imageUrl,
    });
    await msg.save();

    //todo real time fn usoing websockets
    res.status(201).json({ message: msg });
  } catch (error) {
    console.log("Error in sendmsg msgcontroller = " + error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};
